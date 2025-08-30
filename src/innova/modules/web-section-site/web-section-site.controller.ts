import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WebSectionSiteService } from './web-section-site.service';
import { CreateWebSectionSiteDto } from './dto/create-web-section-site.dto';
import { UpdateWebSectionSiteDto } from './dto/update-web-section-site.dto';
import { Observable } from 'rxjs';
import { WebSectionSite } from './entities/web-section-site.entity';

@Controller('web-section-site')
export class WebSectionSiteController {
  constructor(private readonly webSectionSiteService: WebSectionSiteService) { }

  @Post()
  create(@Body() createWebSectionSiteDto: CreateWebSectionSiteDto) {
    return this.webSectionSiteService.create(createWebSectionSiteDto);
  }

  @Get()
  findAll(): Promise<WebSectionSite[]> {
    return this.webSectionSiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webSectionSiteService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWebSectionSiteDto: UpdateWebSectionSiteDto) {
    return this.webSectionSiteService.update(+id, updateWebSectionSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webSectionSiteService.remove(+id);
  }
}
