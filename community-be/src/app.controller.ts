// // import { Controller, Get } from '@nestjs/common';
// // import { AppService } from './app.service';

// // @Controller()
// // export class AppController {
// //   constructor(private readonly appService: AppService) {}

// //   @Get()
// //   getHello(): string {
// //     return this.appService.getHello();
// //   }
// // }

// import { Controller, Get, Ip } from '@nestjs/common';
// import { AppService } from './app.service';
// import { WinstonLogger } from '../config/winston.logger';

// @Controller()
// export class AppController {
//   private readonly winstonlogger = new WinstonLogger();
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(@Ip() Ip: string): string {
//     this.winstonlogger.info(`GetHello call from Ip: ${Ip}`);
//     return this.appService.getHello();
//   }
// }

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
