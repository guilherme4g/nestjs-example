import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { visualizationType } from "../entities/event.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    startDate: Date;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    endDate: Date;

    @ApiProperty()
    @IsString()
    sinopsis: string;

    @ApiProperty()
    @IsEnum(visualizationType)
    @IsNotEmpty()
    visualization: 'public' | 'subscribed_only' | 'guests_only';

    @ApiProperty()
    @IsString()
    slug: string;

    @ApiProperty()
    @IsBoolean()
    isFeatured: boolean;
}
