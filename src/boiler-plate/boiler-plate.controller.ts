import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { BoilerPlateService } from './boiler-plate.service';
import { CreateBoilerPlateDto } from './dto/create-boiler-plate.dto';
import { UpdateBoilerPlateDto } from './dto/update-boiler-plate.dto';
import { Request, Response } from 'express';

@Controller('boiler-plate')
export class BoilerPlateController {
  constructor(private readonly boilerPlateService: BoilerPlateService) {}

  @Post()
  async create(
    @Body() createBoilerPlateDto: CreateBoilerPlateDto,
    @Res() res: Response,
  ) {
    const result = await this.boilerPlateService.create(createBoilerPlateDto);
    return res.status(201).json(result);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const result = await this.boilerPlateService.findAll();
    return res.status(200).json(result);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const result = await this.boilerPlateService.findOne(id);
    res.status(200).json(result);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoilerPlateDto: UpdateBoilerPlateDto,
    @Res() res: Response,
  ) {
    const result = await this.boilerPlateService.update(
      id,
      updateBoilerPlateDto,
    );
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send('Boiler plate not found');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.boilerPlateService.remove(id);
    if (result) {
      res.status(204).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).send({ message: 'Boiler plate not found' });
    }
  }
}
