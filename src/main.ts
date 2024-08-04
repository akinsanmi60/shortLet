import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestConfig, SwaggerConfig } from './common/configs/config.interface';
import { ResponseInterceptor } from './filter/responseFilter/respone.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Use Pipes
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.use(express.json({ limit: '50mb' })); // for parsing application/json

  app.use(express.urlencoded({ limit: '50mb', extended: true })); // for parsing application/x-www-form-urlencoded

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.enableShutdownHooks(); // enable shutdown hooks

  const configService = app.get(ConfigService);
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');
  const nestConfig = configService.get<NestConfig>('nest');

  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Countries API')
      .setDescription(
        swaggerConfig.description || 'The Countries API description',
      )
      .setVersion(swaggerConfig.version || '1.5')
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'docs', app, document, {
      customCssUrl: swaggerConfig.cssURL,
      customJs: swaggerConfig.jsonURL,
      customSiteTitle: 'Countries API',
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  await app.listen(nestConfig.port || 7600);
}
bootstrap();
