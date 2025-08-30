import { PartialType } from '@nestjs/swagger';
import { CreateWebServiceSiteDto } from './create-web-service-site.dto';

export class UpdateWebServiceSiteDto extends PartialType(CreateWebServiceSiteDto) {}
