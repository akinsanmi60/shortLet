import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetCountryByNameDto {
  @ApiProperty({
    example: 'spain',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  countryName: string;
}
