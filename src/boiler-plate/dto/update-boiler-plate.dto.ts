import { PartialType } from '@nestjs/mapped-types';
import { CreateBoilerPlateDto } from './create-boiler-plate.dto';

export class UpdateBoilerPlateDto extends PartialType(CreateBoilerPlateDto) {}
