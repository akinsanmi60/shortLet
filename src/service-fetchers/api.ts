import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class APIURl {
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('COUNTRY_BASE_URL');
  }

  getAllCountries() {
    return `${this.baseUrl}all`;
  }

  getCountryByCode(code: string) {
    return `${this.baseUrl}alpha/${code}`;
  }

  getCountryByName(name: string) {
    return `${this.baseUrl}name/${name}`;
  }

  getCountryByFullName(name: string) {
    return `${this.baseUrl}name/${name}?fullText=true`;
  }

  getCountryByCurrency(currency: string) {
    return `${this.baseUrl}currency/${currency}`;
  }

  getCountryByRegion(region: string) {
    return `${this.baseUrl}region/${region}`;
  }

  getCountryBySubregion(subregion: string) {
    return `${this.baseUrl}subregion/${subregion}`;
  }

  getCountryByCapital(capital: string) {
    return `${this.baseUrl}capital/${capital}`;
  }

  getCountryByLanguage(language: string) {
    return `${this.baseUrl}lang/${language}`;
  }
}
