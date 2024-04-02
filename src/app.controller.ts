import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get(':path*') // Define wildcard route parameter with a wildcard (*) to capture any path
  // getWildcard(@Param('path') path: string): string {
  //   return `You entered: ${path}`;
  // }
}
