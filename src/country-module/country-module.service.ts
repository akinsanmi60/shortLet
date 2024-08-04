import { Injectable, NotFoundException, UseInterceptors } from '@nestjs/common';
import { ServiceFetchersService } from '../service-fetchers/service-fetchers.service';
import { ResponseInterceptor } from '../filter/responseFilter/respone.service';
import { GetCountryByNameDto } from './dto';
import { GetCountrySchemaByName } from '../validations';
import { ZodError } from 'zod';
import { readZodInputError } from '../validations/genericErrorReader';

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class CountryModuleService {
  constructor(
    private readonly serviceFetchersService: ServiceFetchersService,
  ) {}

  async getAllCountries() {
    const response = await this.serviceFetchersService.getAllCountries();
    if (!response) {
      throw new Error('Error fetching countries');
    }

    return {
      message: 'Fetched all countries from API service was successful',
      data: response,
    };
  }

  async getCountryByName(dto: GetCountryByNameDto) {
    try {
      const parseData = GetCountrySchemaByName.parseAsync(dto);

      const { countryName } = await parseData;
      const response =
        await this.serviceFetchersService.getCountryByName(countryName);

      if (!response) {
        throw new NotFoundException(
          `Can not fetch country with name ${countryName}`,
        );
      }

      return {
        message: `Fetched country with name ${countryName} from API service was successful`,
        data: response,
      };
    } catch (err) {
      if (err instanceof ZodError) {
        return readZodInputError(err);
      }
      throw err;
    }
  }

  async getCountryByCode(code: string) {
    const response = await this.serviceFetchersService.getCountryByCode(code);

    if (!response) {
      throw new Error(`Error fetching country with code ${code}`);
    }

    return {
      message: `Fetched country with code ${code} from API service was successful`,
      data: response,
    };
  }

  async getCountryByFullName(name: string) {
    const response =
      await this.serviceFetchersService.getCountryByFullName(name);

    if (!response) {
      throw new Error(`Error fetching country with full name ${name}`);
    }

    return {
      message: `Fetched country with full name ${name} from API service was successful`,
      data: response,
    };
  }

  async getCountryByRegion(region: string) {
    const response =
      await this.serviceFetchersService.getCountryByRegion(region);

    if (!response) {
      throw new Error(`Error fetching country with region ${region}`);
    }

    return {
      message: `Fetched country with region ${region} from API service was successful`,
      data: response,
    };
  }

  async getCountryBySubregion(regionCode: string) {
    const response =
      await this.serviceFetchersService.getCountryBySubregion(regionCode);

    if (!response) {
      throw new Error(`Error fetching country with subregion ${regionCode}`);
    }

    return {
      message: `Fetched country with subregion ${regionCode} from API service was successful`,
      data: response,
    };
  }

  async getCountryByCapital(capital: string) {
    const response =
      await this.serviceFetchersService.getCountryByCapital(capital);

    if (!response) {
      throw new Error(`Error fetching country with capital ${capital}`);
    }

    return {
      message: `Fetched country with capital ${capital} from API service was successful`,
      data: response,
    };
  }

  async getCountryByCurrency(currency: string) {
    const response =
      await this.serviceFetchersService.getCountryByCurrency(currency);

    if (!response) {
      throw new Error(`Error fetching country with currency ${currency}`);
    }

    return {
      message: `Fetched country with currency ${currency} from API service was successful`,
      data: response,
    };
  }

  async getCountryByLanguage(language: string) {
    const response =
      await this.serviceFetchersService.getCountryByLanguage(language);

    if (!response) {
      throw new Error(`Error fetching country with language ${language}`);
    }

    return {
      message: `Fetched country with language ${language} from API service was successful`,
      data: response,
    };
  }
}
