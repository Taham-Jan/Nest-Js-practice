import { Injectable } from '@nestjs/common';
import { CreateBoilerPlateDto } from './dto/create-boiler-plate.dto';
import { UpdateBoilerPlateDto } from './dto/update-boiler-plate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sample } from './schemas/boiler-plate.schema';
import { Model } from 'mongoose';
@Injectable()
export class BoilerPlateService {
  constructor(
    @InjectModel(Sample.name)
    private readonly sampleModel: Model<Sample>,
  ) {}

  async create(createBoilerPlateDto: CreateBoilerPlateDto): Promise<Sample> {
    const createdUser = await this.sampleModel.create(createBoilerPlateDto);
    return createdUser;
  }

  async findAll(): Promise<Sample[]> {
    return await this.sampleModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.sampleModel.findById(id);
    return user;
  }

  async update(id: string, updateBoilerPlateDto: UpdateBoilerPlateDto) {
    const { name, age, religion } = updateBoilerPlateDto;
    const updatedUser = await this.sampleModel.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          age,
          religion,
        },
      },
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string) {
    return await this.sampleModel.findByIdAndDelete(id);
  }
}
