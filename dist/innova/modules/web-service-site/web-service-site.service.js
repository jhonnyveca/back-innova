"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServiceSiteService = void 0;
const common_1 = require("@nestjs/common");
let WebServiceSiteService = class WebServiceSiteService {
    create(createWebServiceSiteDto) {
        return 'This action adds a new webServiceSite';
    }
    findAll() {
        return `This action returns all webServiceSite`;
    }
    findOne(id) {
        return `This action returns a #${id} webServiceSite`;
    }
    update(id, updateWebServiceSiteDto) {
        return `This action updates a #${id} webServiceSite`;
    }
    remove(id) {
        return `This action removes a #${id} webServiceSite`;
    }
};
exports.WebServiceSiteService = WebServiceSiteService;
exports.WebServiceSiteService = WebServiceSiteService = __decorate([
    (0, common_1.Injectable)()
], WebServiceSiteService);
//# sourceMappingURL=web-service-site.service.js.map