import { Injectable, NotFoundException, UseInterceptors } from '@nestjs/common';
import { ServiceFetchersService } from '../service-fetchers/service-fetchers.service';
import { ResponseInterceptor } from '../filter/responseFilter/respone.service';
import { GetAllCountryDto, GetCountryByNameDto } from './dto';
import { GetCountrySchemaByName } from '../validations';
import { ZodError } from 'zod';
import { readZodInputError } from '../validations/genericErrorReader';
import { Country } from '../service-fetchers/type';

@UseInterceptors(ResponseInterceptor)
@Injectable()
export class CountryModuleService {
  private countriesCache: Country[] = []; // Cache to store countries data
  private cacheTimestamp: number = 0; // Timestamp to invalidate cache after a certain period
  private cacheDuration: number = 60 * 60 * 1000; // Cache duration set to 1 hour
  constructor(
    private readonly serviceFetchersService: ServiceFetchersService,
  ) {}

  private paginate(data: any[], page: number, limit: number) {
    const start = (page - 1) * limit;
    const end = start + limit;
    return data.slice(start, end);
  }

  async getAllCountries(dto: GetAllCountryDto) {
    const page = Number(dto.page) || 1;
    const limit = Number(dto.limit) || 10;

    const currentTime = Date.now();

    // Check if cache is empty or expired
    if (
      !this.countriesCache.length ||
      currentTime - this.cacheTimestamp > this.cacheDuration
    ) {
      const response = await this.serviceFetchersService.getAllCountries();
      if (!response) {
        throw new Error('Error fetching countries');
      }

      // Cache the response and update the timestamp
      this.countriesCache = response;
      this.cacheTimestamp = currentTime;
    }

    // Paginate the cached data
    const paginatedData = this.paginate(this.countriesCache, page, limit);
    const totalPage = Math.ceil(this.countriesCache.length / limit);

    return {
      message: 'Fetched all countries from API service was successful',
      data: {
        meta: {
          totalItems: this.countriesCache.length,
          currentPage: page,
          totalPages: totalPage,
          perPage: limit,
        },
        countries: paginatedData,
      },
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
