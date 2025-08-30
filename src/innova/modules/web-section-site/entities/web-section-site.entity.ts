import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "site_section" })
export class WebSectionSite {
    @PrimaryGeneratedColumn({ name: "section_id" })
    sectionId: number;
    @Column({ name: "section_title" })
    sectionTitle: string;
    @Column({ name: "section_subtitle" })
    sectionSubtitle: string;
    @Column({ name: "section_description" })
    sectionDescription: string;
}
