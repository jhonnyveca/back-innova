"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("./innova/config/constants");
const ws_adapter_1 = require("./innova/config/websocket/ws.adapter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api/v1');
    app.useWebSocketAdapter(new ws_adapter_1.WsAdapter(app));
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('API Documentation')
        .setDescription('API documentation for the project')
        .setVersion('1.0')
        .addTag('SISTEMA')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/documentation', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = Number(configService.get(constants_1.SERVER_PORT)) || 3001;
    await app.listen(port);
    console.log(`Server is running on port ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map