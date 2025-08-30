import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { enviroments } from './innova/config/enviroments';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './innova/config/constants';
import { WebSectionSiteModule } from './innova/modules/web-section-site/web-section-site.module';
import { WebServiceSiteModule } from './innova/modules/web-service-site/web-service-site.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: enviroments[process.env.NODE_ENV as keyof typeof enviroments] || '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>(DB_HOST),
        port: configService.get<number>(DB_PORT),
        database: configService.get<string>(DB_DATABASE),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    WebSectionSiteModule,
    WebServiceSiteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
