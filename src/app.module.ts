import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConstants } from './database/constants';
import {RouterModule, Routes} from "nest-router";
import {ApiModule} from "./api/api.module";

const routes: Routes = [
  {
    path: '/api',
    module: ApiModule
  }
]

@Module({
  imports: [MongooseModule.forRoot(DatabaseConstants.url), AuthModule, UsersModule, RouterModule.forRoutes(routes), ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
