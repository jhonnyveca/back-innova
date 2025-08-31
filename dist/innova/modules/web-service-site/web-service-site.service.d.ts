import { CreateWebServiceSiteDto } from './dto/create-web-service-site.dto';
import { UpdateWebServiceSiteDto } from './dto/update-web-service-site.dto';
export declare class WebServiceSiteService {
    create(createWebServiceSiteDto: CreateWebServiceSiteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWebServiceSiteDto: UpdateWebServiceSiteDto): string;
    remove(id: number): string;
}
