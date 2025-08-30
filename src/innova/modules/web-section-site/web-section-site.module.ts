import { Module } from '@nestjs/common';
import { WebSectionSiteService } from './web-section-site.service';
import { WebSectionSiteController } from './web-section-site.controller';
import { WebSectionSiteRepository } from './web-section-site.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebSectionSite } from './entities/web-section-site.entity';
import { WebSectionSiteGateway } from '../../config/websocket/web-section-site.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([WebSectionSite])],
  controllers: [WebSectionSiteController],
  providers: [WebSectionSiteRepository, WebSectionSiteService, WebSectionSiteGateway],
})
export class WebSectionSiteModule { }
