import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWebSectionSiteDto } from './dto/create-web-section-site.dto';
import { UpdateWebSectionSiteDto } from './dto/update-web-section-site.dto';
import { WebSectionSiteRepository } from './web-section-site.repository';
import { WebSectionSite } from './entities/web-section-site.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { WebSectionSiteGateway } from '../../config/websocket/web-section-site.gateway';

@Injectable()
export class WebSectionSiteService {

  constructor(@InjectRepository(WebSectionSite)
  private readonly sectionRepo: WebSectionSiteRepository,
    private readonly gateway: WebSectionSiteGateway) { }

  create(createWebSectionSiteDto: CreateWebSectionSiteDto) {
    return this.sectionRepo.save(createWebSectionSiteDto);
  }

  findAll(): Promise<WebSectionSite[]> {
    return this.sectionRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} webSectionSite`;
  }

  async update(id: number, updateWebSectionSiteDto: UpdateWebSectionSiteDto): Promise<WebSectionSite> {
    const section = await this.sectionRepo.preload({
      sectionId: id,
      ...updateWebSectionSiteDto,
    });

    if (!section) {
      throw new NotFoundException(`Section with id ${id} not found`);
    }

    const updated = await this.sectionRepo.save(section);

    // Notificar a los clientes por WebSocket
    this.gateway.sendUpdate(updated);

    return updated;
  }

  remove(id: number) {
    return `This action removes a #${id} webSectionSite`;
  }
}
