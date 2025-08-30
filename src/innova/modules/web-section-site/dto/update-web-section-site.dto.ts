import { PartialType } from '@nestjs/swagger';
import { CreateWebSectionSiteDto } from './create-web-section-site.dto';

export class UpdateWebSectionSiteDto extends PartialType(CreateWebSectionSiteDto) {}
