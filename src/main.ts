import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

export interface ICoreConfig {
  HOST: string;
  PORT: number;
  APP_ENV: string;
  REGION: string;
  MODULE: string;
  SERVICE_NAME: string;
  DEBUG: boolean;
  LOCAL_ENV: boolean;
  MEMORY_MONITOR_INTERVAL: number;
  ASYNC_HOOKS_STORAGE_TTL: number;
  APIM_GLOBAL_URL_KEY: string;
  APIM_GLOBAL_URL: string;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);  
  const port = configService.get<number>('PORT');
  console.log("listening on port:"+ port);  
  await app.listen(port);
}
bootstrap();
