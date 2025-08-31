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
exports.WebSectionSiteController = void 0;
const common_1 = require("@nestjs/common");
const web_section_site_service_1 = require("./web-section-site.service");
const create_web_section_site_dto_1 = require("./dto/create-web-section-site.dto");
const update_web_section_site_dto_1 = require("./dto/update-web-section-site.dto");
let WebSectionSiteController = class WebSectionSiteController {
    webSectionSiteService;
    constructor(webSectionSiteService) {
        this.webSectionSiteService = webSectionSiteService;
    }
    create(createWebSectionSiteDto) {
        return this.webSectionSiteService.create(createWebSectionSiteDto);
    }
    findAll() {
        return this.webSectionSiteService.findAll();
    }
    findOne(id) {
        return this.webSectionSiteService.findOne(+id);
    }
    update(id, updateWebSectionSiteDto) {
        return this.webSectionSiteService.update(+id, updateWebSectionSiteDto);
    }
    remove(id) {
        return this.webSectionSiteService.remove(+id);
    }
};
exports.WebSectionSiteController = WebSectionSiteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_web_section_site_dto_1.CreateWebSectionSiteDto]),
    __metadata("design:returntype", void 0)
], WebSectionSiteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebSectionSiteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebSectionSiteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_web_section_site_dto_1.UpdateWebSectionSiteDto]),
    __metadata("design:returntype", void 0)
], WebSectionSiteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebSectionSiteController.prototype, "remove", null);
exports.WebSectionSiteController = WebSectionSiteController = __decorate([
    (0, common_1.Controller)('web-section-site'),
    __metadata("design:paramtypes", [web_section_site_service_1.WebSectionSiteService])
], WebSectionSiteController);
//# sourceMappingURL=web-section-site.controller.js.map