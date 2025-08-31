"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSectionSiteService = void 0;
const common_1 = require("@nestjs/common");
const web_section_site_repository_1 = require("./web-section-site.repository");
const web_section_site_entity_1 = require("./entities/web-section-site.entity");
const typeorm_1 = require("@nestjs/typeorm");
const web_section_site_gateway_1 = require("../../config/websocket/web-section-site.gateway");
let WebSectionSiteService = class WebSectionSiteService {
    sectionRepo;
    gateway;
    constructor(sectionRepo, gateway) {
        this.sectionRepo = sectionRepo;
        this.gateway = gateway;
    }
    create(createWebSectionSiteDto) {
        return this.sectionRepo.save(createWebSectionSiteDto);
    }
    findAll() {
        return this.sectionRepo.find();
    }
    findOne(id) {
        return `This action returns a #${id} webSectionSite`;
    }
    async update(id, updateWebSectionSiteDto) {
        const section = await this.sectionRepo.preload({
            sectionId: id,
            ...updateWebSectionSiteDto,
        });
        if (!section) {
            throw new common_1.NotFoundException(`Section with id ${id} not found`);
        }
        const updated = await this.sectionRepo.save(section);
        this.gateway.sendUpdate(updated);
        return updated;
    }
    remove(id) {
        return `This action removes a #${id} webSectionSite`;
    }
};
exports.WebSectionSiteService = WebSectionSiteService;
exports.WebSectionSiteService = WebSectionSiteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(web_section_site_entity_1.WebSectionSite)),
    __metadata("design:paramtypes", [web_section_site_repository_1.WebSectionSiteRepository,
        web_section_site_gateway_1.WebSectionSiteGateway])
], WebSectionSiteService);
//# sourceMappingURL=web-section-site.service.js.map