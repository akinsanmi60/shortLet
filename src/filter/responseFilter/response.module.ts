import { Module } from '@nestjs/common';
import { ResponseInterceptor } from './respone.service';

@Module({
  providers: [ResponseInterceptor],
})
export class ResponseInterceptorModule {}
