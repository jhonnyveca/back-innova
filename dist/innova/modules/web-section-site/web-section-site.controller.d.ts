import { WebSectionSiteService } from './web-section-site.service';
import { CreateWebSectionSiteDto } from './dto/create-web-section-site.dto';
import { UpdateWebSectionSiteDto } from './dto/update-web-section-site.dto';
import { WebSectionSite } from './entities/web-section-site.entity';
export declare class WebSectionSiteController {
    private readonly webSectionSiteService;
    constructor(webSectionSiteService: WebSectionSiteService);
    create(createWebSectionSiteDto: CreateWebSectionSiteDto): Promise<CreateWebSectionSiteDto & WebSectionSite>;
    findAll(): Promise<WebSectionSite[]>;
    findOne(id: string): string;
    update(id: string, updateWebSectionSiteDto: UpdateWebSectionSiteDto): Promise<WebSectionSite>;
    remove(id: string): string;
}
