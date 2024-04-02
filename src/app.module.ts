/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogController } from './dog/dog.controller';
import { AsyncOperationsController } from './async-operations/async-operations.controller';
import { BoilerPlateModule } from './boiler-plate/boiler-plate.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BoilerPlateModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController, DogController, AsyncOperationsController],
  providers: [AppService],
})
export class AppModule {}
