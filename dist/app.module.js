"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("@nestjs/config");
const enviroments_1 = require("./innova/config/enviroments");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("./innova/config/constants");
const web_section_site_module_1 = require("./innova/modules/web-section-site/web-section-site.module");
const web_service_site_module_1 = require("./innova/modules/web-service-site/web-service-site.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get(constants_1.DB_HOST),
                    port: configService.get(constants_1.DB_PORT),
                    database: configService.get(constants_1.DB_DATABASE),
                    username: configService.get(constants_1.DB_USER),
                    password: configService.get(constants_1.DB_PASSWORD),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                    ssl: {
                        rejectUnauthorized: false,
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            web_section_site_module_1.WebSectionSiteModule,
            web_service_site_module_1.WebServiceSiteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map