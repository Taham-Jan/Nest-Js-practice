import { Module } from '@nestjs/common';
import { BoilerPlateService } from './boiler-plate.service';
import { BoilerPlateController } from './boiler-plate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sample, SampleSchema } from './schemas/boiler-plate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sample.name, schema: SampleSchema }]),
  ],
  controllers: [BoilerPlateController],
  providers: [BoilerPlateService],
})
export class BoilerPlateModule {}
