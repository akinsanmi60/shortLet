import type { Config } from './config.interface';

const portNumber = Number(process.env.APP_PORT) || 7600;

const config: Config = {
  nest: {
    port: portNumber,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Countries API',
    description: 'The Countries API description',
    version: '1.5',
    path: 'doc',
    cssURL:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    jsonURL: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
  },
};

export default (): Config => config;
