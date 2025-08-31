import { CreateWebSectionSiteDto } from './dto/create-web-section-site.dto';
import { UpdateWebSectionSiteDto } from './dto/update-web-section-site.dto';
import { WebSectionSiteRepository } from './web-section-site.repository';
import { WebSectionSite } from './entities/web-section-site.entity';
import { WebSectionSiteGateway } from '../../config/websocket/web-section-site.gateway';
export declare class WebSectionSiteService {
    private readonly sectionRepo;
    private readonly gateway;
    constructor(sectionRepo: WebSectionSiteRepository, gateway: WebSectionSiteGateway);
    create(createWebSectionSiteDto: CreateWebSectionSiteDto): Promise<CreateWebSectionSiteDto & WebSectionSite>;
    findAll(): Promise<WebSectionSite[]>;
    findOne(id: number): string;
    update(id: number, updateWebSectionSiteDto: UpdateWebSectionSiteDto): Promise<WebSectionSite>;
    remove(id: number): string;
}
