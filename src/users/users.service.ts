import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument} from './user.schema';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({email: username});
  }

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    return this.userModel.create(createUserDto);
  }
}

export async function promiseWithoutPassword(userDocumentPromise: Promise<UserDocument>) {
  return userDocumentPromise.then(({password, ...result}) => result);
}

export async function withoutPassword({password, ...result}) {
  return result;
}
