import { Controller } from '@nestjs/common';
import { ServiceFetchersService } from './service-fetchers.service';

@Controller('service-fetchers')
export class ServiceFetchersController {
  constructor(private readonly serviceFetchersService: ServiceFetchersService) {}
}
