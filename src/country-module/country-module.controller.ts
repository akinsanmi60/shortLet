import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CountryModuleService } from './country-module.service';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountryResponseDto } from './response-dto';
import { GetCountryByNameDto } from './dto';

ApiTags('Countries');
@Controller('country')
export class CountryModuleController {
  constructor(private readonly countryModuleService: CountryModuleService) {}

  @Get('/getAllCountries')
  @ApiResponse({
    description: 'This endpoint will return all Countries',
    type: CountryResponseDto,
  })
  getAllCountries() {
    return this.countryModuleService.getAllCountries();
  }

  @Get('/getCountryByName')
  @ApiQuery({ type: GetCountryByNameDto })
  @ApiResponse({
    description:
      'A country or countries detail can be fetched using the first three letters of its name',
    type: CountryResponseDto,
  })
  getAllCountryByName(@Query() dto) {
    return this.countryModuleService.getCountryByName(dto);
  }

  @Get('/getCountryByCode/:code')
  @ApiParam({ name: 'code', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its code',
    type: CountryResponseDto,
  })
  getAllCountryByCode(@Param('code') code: string) {
    return this.countryModuleService.getCountryByCode(code);
  }

  @Get('/getCountryByFullName/:name')
  @ApiParam({ name: 'name', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its name',
    type: CountryResponseDto,
  })
  getAllCountryByFullName(@Param('name') name: string) {
    return this.countryModuleService.getCountryByFullName(name);
  }

  @Post('/getCountryByRegion/:region')
  @ApiParam({ name: 'region', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its region',
    type: CountryResponseDto,
  })
  getAllCountryByRegion(@Param('region') region: string) {
    return this.countryModuleService.getCountryByRegion(region);
  }

  @Get('/getCountryByCapital/:capital')
  @ApiParam({ name: 'capital', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its capital',
    type: CountryResponseDto,
  })
  getAllCountryByCapital(@Param('capital') capital: string) {
    return this.countryModuleService.getCountryByCapital(capital);
  }

  @Post('/getCountryByCurrency/:currency')
  @ApiParam({ name: 'currency', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its currency',
    type: CountryResponseDto,
  })
  getAllCountryByCurrency(@Param('currency') currency: string) {
    return this.countryModuleService.getCountryByCurrency(currency);
  }

  @Post('/getCountryByLanguage/:language')
  @ApiParam({ name: 'language', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its language',
    type: CountryResponseDto,
  })
  getAllCountryByLanguage(@Param('language') language: string) {
    return this.countryModuleService.getCountryByLanguage(language);
  }

  @Get('/getCountryBySubregion/:subRegionName')
  @ApiParam({ name: 'subRegionName', type: String })
  @ApiResponse({
    description: 'With this endpoint you can get a country by its subregion',
    type: CountryResponseDto,
  })
  getAllCountryBySubregion(@Param('subRegionName') subRegionName: string) {
    return this.countryModuleService.getCountryBySubregion(subRegionName);
  }
}
