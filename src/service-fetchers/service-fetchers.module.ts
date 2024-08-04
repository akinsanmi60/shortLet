import { Logger, Module } from '@nestjs/common';
import { ServiceFetchersService } from './service-fetchers.service';
import { ServiceFetchersController } from './service-fetchers.controller';
import { HttpModule } from '@nestjs/axios';
import { APIURl } from './api';

@Module({
  imports: [HttpModule],
  controllers: [ServiceFetchersController],
  providers: [ServiceFetchersService, APIURl, Logger],
  exports: [ServiceFetchersService, APIURl],
})
export class ServiceFetchersModule {}
