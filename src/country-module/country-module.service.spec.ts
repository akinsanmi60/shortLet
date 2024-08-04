import { Test, TestingModule } from '@nestjs/testing';
import { CountryModuleService } from './country-module.service';
import { ServiceFetchersService } from '../service-fetchers/service-fetchers.service';
import { NotFoundException } from '@nestjs/common';
import { ZodError } from 'zod';
import { readZodInputError } from '../validations/genericErrorReader';
import { GetCountryByNameDto } from './dto';
import { GetCountrySchemaByName } from '../validations';
import { Country } from './response-dto';
import { countryMockUp } from './mock-up';

describe('CountryModuleService', () => {
  let service: CountryModuleService;
  let serviceFetchersService: ServiceFetchersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountryModuleService,
        {
          provide: ServiceFetchersService,
          useValue: {
            getAllCountries: jest.fn(),
            getCountryByName: jest.fn(),
            getCountryByCode: jest.fn(),
            getCountryByFullName: jest.fn(),
            getCountryByRegion: jest.fn(),
            getCountryBySubregion: jest.fn(),
            getCountryByCapital: jest.fn(),
            getCountryByCurrency: jest.fn(),
            getCountryByLanguage: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CountryModuleService>(CountryModuleService);
    serviceFetchersService = module.get<ServiceFetchersService>(
      ServiceFetchersService,
    );
  });

  describe('getAllCountries', () => {
    it('should return a success message and data if countries are fetched successfully', async () => {
      const countries = countryMockUp as unknown as Country[];

      jest
        .spyOn(serviceFetchersService, 'getAllCountries')
        .mockResolvedValue(countries);

      const result = await service.getAllCountries();

      expect(result).toEqual({
        message: 'Fetched all countries from API service was successful',
        data: countries,
      });
    });

    it('should throw an error if countries are not fetched', async () => {
      jest
        .spyOn(serviceFetchersService, 'getAllCountries')
        .mockResolvedValue(null);

      await expect(service.getAllCountries()).rejects.toThrow(
        'Error fetching countries',
      );
    });
  });

  describe('getCountryByName', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const dto: GetCountryByNameDto = { countryName: 'nigeria' };
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByName')
        .mockResolvedValue(country);

      const result = await service.getCountryByName(dto);
      expect(result).toEqual({
        message: `Fetched country with name ${dto.countryName} from API service was successful`,
        data: country,
      });
    });

    it('should throw a NotFoundException if country is not found', async () => {
      const dto: GetCountryByNameDto = { countryName: 'Country1' };
      jest
        .spyOn(serviceFetchersService, 'getCountryByName')
        .mockResolvedValue(null);

      await expect(service.getCountryByName(dto)).rejects.toThrow(
        new NotFoundException(
          `Can not fetch country with name ${dto.countryName}`,
        ),
      );
    });

    it('should handle Zod validation errors', async () => {
      const dto: GetCountryByNameDto = { countryName: '' };
      const zodError = new ZodError([]);
      jest
        .spyOn(GetCountrySchemaByName, 'parseAsync')
        .mockRejectedValue(zodError);

      try {
        await service.getCountryByName(dto);
      } catch (error) {
        expect(error).toEqual(readZodInputError(zodError));
      }
    });
  });

  describe('getCountryByCode', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const code = 'NG';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByCode')
        .mockResolvedValue(country);

      const result = await service.getCountryByCode(code);
      expect(result).toEqual({
        message: `Fetched country with code ${code} from API service was successful`,
        data: country,
      });
      expect(serviceFetchersService.getCountryByCode).toHaveBeenCalledWith(
        code,
      );
    });
  });

  describe('getCountryByFullName', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const name = 'Nigeria';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByFullName')
        .mockResolvedValue(country);

      const result = await service.getCountryByFullName(name);
      expect(result).toEqual({
        message: `Fetched country with full name ${name} from API service was successful`,
        data: country,
      });
      expect(serviceFetchersService.getCountryByFullName).toHaveBeenCalledWith(
        name,
      );
    });
  });

  describe('getCountryByRegion', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const region = 'Africa';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByRegion')
        .mockResolvedValue(country);

      const result = await service.getCountryByRegion(region);
      expect(result).toEqual({
        message: `Fetched country with region ${region} from API service was successful`,
        data: country,
      });
      expect(serviceFetchersService.getCountryByRegion).toHaveBeenCalledWith(
        region,
      );
    });
  });

  describe('getCountryBySubregion', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const subregion = 'Northern Africa';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryBySubregion')
        .mockResolvedValue(country);

      const result = await service.getCountryBySubregion(subregion);
      expect(result).toEqual({
        message: `Fetched country with subregion ${subregion} from API service was successful`,
        data: country,
      });

      expect(serviceFetchersService.getCountryBySubregion).toHaveBeenCalledWith(
        subregion,
      );
    });
  });

  describe('getCountryByCurrency', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const currency = 'NGN';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByCurrency')
        .mockResolvedValue(country);

      const result = await service.getCountryByCurrency(currency);
      expect(result).toEqual({
        message: `Fetched country with currency ${currency} from API service was successful`,
        data: country,
      });

      expect(serviceFetchersService.getCountryByCurrency).toHaveBeenCalledWith(
        currency,
      );
    });
  });

  describe('getCountryByLanguage', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const language = 'English';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByLanguage')
        .mockResolvedValue(country);

      const result = await service.getCountryByLanguage(language);

      expect(result).toEqual({
        message: `Fetched country with language ${language} from API service was successful`,
        data: country,
      });

      expect(serviceFetchersService.getCountryByLanguage).toHaveBeenCalledWith(
        language,
      );
    });
  });

  describe('getCountryByCapital', () => {
    it('should return a success message and data if country is fetched successfully', async () => {
      const capital = 'Abuja';
      const country = countryMockUp as unknown as Country[];
      jest
        .spyOn(serviceFetchersService, 'getCountryByCapital')
        .mockResolvedValue(country);

      const result = await service.getCountryByCapital(capital);
      expect(result).toEqual({
        message: `Fetched country with capital ${capital} from API service was successful`,
        data: country,
      });

      expect(serviceFetchersService.getCountryByCapital).toHaveBeenCalledWith(
        capital,
      );
    });
  });
});
