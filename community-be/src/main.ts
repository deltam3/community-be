import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { WinstonLogger } from '../config/winston.logger';

dotenv.config({ path: process.cwd() + '/.env.development' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port', 3001);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);

  const logger = new WinstonLogger();
  const appUrl = await app.getUrl();
  // below: for cli
  logger.error(`Application is running on: ${appUrl}`);
  logger.warn(`Application is running on: ${appUrl}`);
  logger.info(`Application is running on: ${appUrl}`);
  logger.debug(`Application is running on: ${appUrl}`);
  logger.http(`Application is running on: ${appUrl}`);
  logger.verbose(`Application is running on: ${appUrl}`);
  logger.input(`Application is running on: ${appUrl}`);
  logger.silly(`Application is running on: ${appUrl}`);
  logger.data(`Application is running on: ${appUrl}`);
  logger.help(`Application is running on: ${appUrl}`);
  logger.prompt(`Application is running on: ${appUrl}`);
  // below : syslog levels only
  logger.emerg(`Application is running on: ${appUrl}`);
  logger.alert(`Application is running on: ${appUrl}`);
  logger.crit(`Application is running on: ${appUrl}`);
  logger.notice(`Application is running on: ${appUrl}`);
}

bootstrap().catch((error) => {
  console.error('Error starting the application:', error);
});
