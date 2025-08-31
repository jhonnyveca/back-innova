import { WebServiceSiteService } from './web-service-site.service';
import { CreateWebServiceSiteDto } from './dto/create-web-service-site.dto';
import { UpdateWebServiceSiteDto } from './dto/update-web-service-site.dto';
export declare class WebServiceSiteController {
    private readonly webServiceSiteService;
    constructor(webServiceSiteService: WebServiceSiteService);
    create(createWebServiceSiteDto: CreateWebServiceSiteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWebServiceSiteDto: UpdateWebServiceSiteDto): string;
    remove(id: string): string;
}
