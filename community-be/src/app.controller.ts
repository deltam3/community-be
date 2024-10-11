import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { WinstonLogger } from '../config/winston.logger';

@Controller()
export class AppController {
  private readonly winstonlogger = new WinstonLogger();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip: string): string {
    this.winstonlogger.info(`GetHello call from IP: ${ip}`);
    return this.appService.getHello();
  }
}
