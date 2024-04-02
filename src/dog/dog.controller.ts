/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  @Post()
  @HttpCode(204)
  create(@Res() res: Response): void {
    // res.status(200).json({ redirectTo: 'https://nestjs.com' });
    res.send('Create New Dog');
  }
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): void {
    res.json({ message: 'hello' });
  }

  //   @Get()
  //   @Redirect('https://nestjs.com', 301)
  //   @HttpCode(204)
  //   findAll(): void {}

  // @Get(':id')
  // findOne(@Param() params: any, @Res() res: Response): void {
  //   console.log(params.id);
  //   res.json({ message: `This action returns a #${params.id} cat` });
  // }
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response): void {
    console.log(id);
    res.json({ message: `This action returns a #${id} cat` });
  }
}
