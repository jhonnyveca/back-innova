import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebServiceSiteService } from './web-service-site.service';
import { CreateWebServiceSiteDto } from './dto/create-web-service-site.dto';
import { UpdateWebServiceSiteDto } from './dto/update-web-service-site.dto';

@Controller('web-service-site')
export class WebServiceSiteController {
  constructor(private readonly webServiceSiteService: WebServiceSiteService) {}

  @Post()
  create(@Body() createWebServiceSiteDto: CreateWebServiceSiteDto) {
    return this.webServiceSiteService.create(createWebServiceSiteDto);
  }

  @Get()
  findAll() {
    return this.webServiceSiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webServiceSiteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebServiceSiteDto: UpdateWebServiceSiteDto) {
    return this.webServiceSiteService.update(+id, updateWebServiceSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webServiceSiteService.remove(+id);
  }
}
