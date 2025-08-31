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
exports.WebServiceSiteController = void 0;
const common_1 = require("@nestjs/common");
const web_service_site_service_1 = require("./web-service-site.service");
const create_web_service_site_dto_1 = require("./dto/create-web-service-site.dto");
const update_web_service_site_dto_1 = require("./dto/update-web-service-site.dto");
let WebServiceSiteController = class WebServiceSiteController {
    webServiceSiteService;
    constructor(webServiceSiteService) {
        this.webServiceSiteService = webServiceSiteService;
    }
    create(createWebServiceSiteDto) {
        return this.webServiceSiteService.create(createWebServiceSiteDto);
    }
    findAll() {
        return this.webServiceSiteService.findAll();
    }
    findOne(id) {
        return this.webServiceSiteService.findOne(+id);
    }
    update(id, updateWebServiceSiteDto) {
        return this.webServiceSiteService.update(+id, updateWebServiceSiteDto);
    }
    remove(id) {
        return this.webServiceSiteService.remove(+id);
    }
};
exports.WebServiceSiteController = WebServiceSiteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_web_service_site_dto_1.CreateWebServiceSiteDto]),
    __metadata("design:returntype", void 0)
], WebServiceSiteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebServiceSiteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebServiceSiteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_web_service_site_dto_1.UpdateWebServiceSiteDto]),
    __metadata("design:returntype", void 0)
], WebServiceSiteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WebServiceSiteController.prototype, "remove", null);
exports.WebServiceSiteController = WebServiceSiteController = __decorate([
    (0, common_1.Controller)('web-service-site'),
    __metadata("design:paramtypes", [web_service_site_service_1.WebServiceSiteService])
], WebServiceSiteController);
//# sourceMappingURL=web-service-site.controller.js.map