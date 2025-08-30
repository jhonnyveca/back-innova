import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "site_service" })
export class WebServiceSiteEntity {
    @PrimaryGeneratedColumn({ name: "service_id" })
    serviceSiteId: number;
    @Column({ name: "service_image" })
    serviceSiteImage: string;
    @Column({ name: "service_name" })
    serviceSiteName: string;
    @Column({ name: "service_detail" })
    serviceSiteDetail: string;

}
