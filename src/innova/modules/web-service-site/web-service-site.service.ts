import { Injectable } from '@nestjs/common';
import { CreateWebServiceSiteDto } from './dto/create-web-service-site.dto';
import { UpdateWebServiceSiteDto } from './dto/update-web-service-site.dto';

@Injectable()
export class WebServiceSiteService {
  create(createWebServiceSiteDto: CreateWebServiceSiteDto) {
    return 'This action adds a new webServiceSite';
  }

  findAll() {
    return `This action returns all webServiceSite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webServiceSite`;
  }

  update(id: number, updateWebServiceSiteDto: UpdateWebServiceSiteDto) {
    return `This action updates a #${id} webServiceSite`;
  }

  remove(id: number) {
    return `This action removes a #${id} webServiceSite`;
  }
}
