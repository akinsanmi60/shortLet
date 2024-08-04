import { ServiceFetchersService } from './service-fetchers/service-fetchers.service';
import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import config from './common/configs/config';
import { ResponseInterceptor } from './filter/responseFilter/respone.service';
import { CountryModuleModule } from './country-module/country-module.module';
import { APIURl } from './service-fetchers/api';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    HttpModule.register({ timeout: 5000, maxRedirects: 5 }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    CountryModuleModule,
  ],

  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    AppService,
    ServiceFetchersService,
    APIURl,
    ResponseInterceptor,
    Logger,
  ],
})
export class AppModule {}
