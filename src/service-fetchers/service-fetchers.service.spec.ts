import { Test, TestingModule } from '@nestjs/testing';
import { ServiceFetchersService } from './service-fetchers.service';
import { HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs';
import { Logger } from '@nestjs/common';
import { APIURl } from './api';
import { AxiosResponse } from 'axios';
import { Country } from './type';

describe('ServiceFetchersService', () => {
  let service: ServiceFetchersService;
  let httpService: HttpService;
  let module: TestingModule;
  let urlService: APIURl;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        ServiceFetchersService,
        {
          provide: APIURl,
          useValue: {
            getAllCountries: jest
              .fn()
              .mockReturnValue(urlService?.getAllCountries()),
            getCountryByCode: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByCode('code')),
            getCountryByName: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByName('name')),
            getCountryByRegion: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByRegion('region')),
            getCountryBySubregion: jest
              .fn()
              .mockReturnValue(urlService?.getCountryBySubregion('subregion')),
            getCountryByCapital: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByCapital('capital')),
            getCountryByCurrency: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByCurrency('currency')),
            getCountryByFullName: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByFullName('fullName')),
            getCountryByLanguage: jest
              .fn()
              .mockReturnValue(urlService?.getCountryByLanguage('language')),
          },
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: Logger,
          useValue: {
            log: jest.fn(),
            error: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ServiceFetchersService>(ServiceFetchersService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllCountries', () => {
    it('should return an array of countries', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getAllCountries()).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getAllCountries()).rejects.toThrow('Network error');
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByCode', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByCode('code')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByCode('code')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByName', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByName('name')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByName('name')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByRegion', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByRegion('region')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByRegion('region')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByLanguage', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByLanguage('language')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByLanguage('language')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByCurrency', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByCurrency('currency')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByCurrency('currency')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByCapital', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByCapital('capital')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByCapital('capital')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByCode', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByCode('code')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByCode('code')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });

  describe('getCountryByName', () => {
    it('should return a country', async () => {
      const result = [] as Country[];
      const axiosResponse: AxiosResponse = {
        data: result,
        status: 200 | 201 | 202,
        statusText: 'OK',
        headers: {},
        config: {
          headers: undefined,
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValue(of(axiosResponse));
      expect(await service.getCountryByName('name')).toEqual(result);
    });

    it('should log an error when there is a problem fetching data', async () => {
      const error = new Error('Network error');
      jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => error));

      await expect(service.getCountryByName('name')).rejects.toThrow(
        'Network error',
      );
      expect(service['logger'].error).toHaveBeenCalled();
    });
  });
});
