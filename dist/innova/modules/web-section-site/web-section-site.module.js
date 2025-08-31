"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSectionSiteModule = void 0;
const common_1 = require("@nestjs/common");
const web_section_site_service_1 = require("./web-section-site.service");
const web_section_site_controller_1 = require("./web-section-site.controller");
const web_section_site_repository_1 = require("./web-section-site.repository");
const typeorm_1 = require("@nestjs/typeorm");
const web_section_site_entity_1 = require("./entities/web-section-site.entity");
const web_section_site_gateway_1 = require("../../config/websocket/web-section-site.gateway");
let WebSectionSiteModule = class WebSectionSiteModule {
};
exports.WebSectionSiteModule = WebSectionSiteModule;
exports.WebSectionSiteModule = WebSectionSiteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([web_section_site_entity_1.WebSectionSite])],
        controllers: [web_section_site_controller_1.WebSectionSiteController],
        providers: [web_section_site_repository_1.WebSectionSiteRepository, web_section_site_service_1.WebSectionSiteService, web_section_site_gateway_1.WebSectionSiteGateway],
    })
], WebSectionSiteModule);
//# sourceMappingURL=web-section-site.module.js.map