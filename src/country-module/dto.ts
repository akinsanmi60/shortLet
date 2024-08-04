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

export class GetAllCountryDto {
  @ApiProperty({ example: '1', required: false })
  @IsString()
  page: string;

  @ApiProperty({ example: '10', required: false })
  @IsString()
  limit: string;
}
