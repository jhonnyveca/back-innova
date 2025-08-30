import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SERVER_PORT } from './innova/config/constants';
import { WsAdapter } from './innova/config/websocket/ws.adapter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useWebSocketAdapter(new WsAdapter(app));
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Documentation')
    .setDescription('API documentation for the project')
    .setVersion('1.0')
    .addTag('SISTEMA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documentation', app, document);

  const configService = app.get(ConfigService);
  const port = Number(configService.get<number>(SERVER_PORT)) || 3001;
  await app.listen(port);
  console.log(`Server is running on port ${await app.getUrl()}`);
}
bootstrap();