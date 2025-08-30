import { Module } from '@nestjs/common';
import { WebServiceSiteService } from './web-service-site.service';
import { WebServiceSiteController } from './web-service-site.controller';

@Module({
  controllers: [WebServiceSiteController],
  providers: [WebServiceSiteService],
})
export class WebServiceSiteModule {}
