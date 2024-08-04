import { Injectable, Logger } from '@nestjs/common';
import { APIURl } from './api';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Country } from './type';
import {
  determineErrorCode,
  readStatusCodeError,
} from '../validations/genericErrorReader';

@Injectable()
export class ServiceFetchersService {
  constructor(
    private readonly urlService: APIURl,
    private readonly axiosService: HttpService,
    private readonly logger: Logger,
  ) {}

  async getAllCountries() {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getAllCountries()),
      );

      this.logger.log('Fetched all countries from API service was successful');

      return response.data as Country[];
    } catch (error) {
      this.logger.error(`Error fetching countries`, error.stack);
      throw error;
    }
  }

  async getCountryByCode(code: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByCode(code)),
      );
      this.logger.log(
        `Fetched country with code ${code} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with code ${code}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByName(name: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByName(name)),
      );
      this.logger.log(
        `Fetched country with name ${name} from API service was successful`,
      );
      return response.data as Country[];
    } catch (error) {
      this.logger.error(
        `Error fetching country with name ${name}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByRegion(region: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByRegion(region)),
      );
      this.logger.log(
        `Fetched country with region ${region} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with region ${region}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryBySubregion(subregion: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryBySubregion(subregion)),
      );
      this.logger.log(
        `Fetched country with subregion ${subregion} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with subregion ${subregion}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByCapital(capital: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByCapital(capital)),
      );
      this.logger.log(
        `Fetched country with capital ${capital} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with capital ${capital}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByCurrency(currency: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByCurrency(currency)),
      );
      this.logger.log(
        `Fetched country with currency ${currency} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with currency ${currency}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByFullName(name: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByFullName(name)),
      );
      this.logger.log(
        `Fetched country with full name ${name} from API service was successful`,
      );
      return response.data as Country[];
    } catch (error) {
      this.logger.error(
        `Error fetching country with full name ${name}`,
        error.stack,
      );
      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }

  async getCountryByLanguage(language: string) {
    try {
      const response = await firstValueFrom(
        this.axiosService.get(this.urlService.getCountryByLanguage(language)),
      );
      this.logger.log(
        `Fetched country with language ${language} from API service was successful`,
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Error fetching country with language ${language}`,
        error.stack,
      );

      if (readStatusCodeError(error?.response?.status)) {
        determineErrorCode(
          error?.response?.status,
          error?.response?.statusText,
        );
      }

      throw error;
    }
  }
}
