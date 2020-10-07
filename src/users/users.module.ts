import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: User.name,
      useFactory: () => {
        const schema = UserSchema;
        schema.path('email').validate(function(value) {
          this.model(User.name).countDocuments({email: value}, (err, count) => {
            if (err) {
              return false;
            }
            return !count;
          })
        });

        return schema;
      }
    },
  ])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
}
