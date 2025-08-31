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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSectionSite = void 0;
const typeorm_1 = require("typeorm");
let WebSectionSite = class WebSectionSite {
    sectionId;
    sectionTitle;
    sectionSubtitle;
    sectionDescription;
};
exports.WebSectionSite = WebSectionSite;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "section_id" }),
    __metadata("design:type", Number)
], WebSectionSite.prototype, "sectionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "section_title" }),
    __metadata("design:type", String)
], WebSectionSite.prototype, "sectionTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "section_subtitle" }),
    __metadata("design:type", String)
], WebSectionSite.prototype, "sectionSubtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "section_description" }),
    __metadata("design:type", String)
], WebSectionSite.prototype, "sectionDescription", void 0);
exports.WebSectionSite = WebSectionSite = __decorate([
    (0, typeorm_1.Entity)({ name: "site_section" })
], WebSectionSite);
//# sourceMappingURL=web-section-site.entity.js.map