import { Module } from '@nestjs/common';
import { CountryModuleService } from './country-module.service';
import { CountryModuleController } from './country-module.controller';
import { ServiceFetchersModule } from '../service-fetchers/service-fetchers.module';

@Module({
  imports: [ServiceFetchersModule],
  controllers: [CountryModuleController],
  providers: [CountryModuleService],
})
export class CountryModuleModule {}
