import { IsString } from "class-validator";

export class CreateWebSectionSiteDto {

    @IsString()
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDescription: string;
}
