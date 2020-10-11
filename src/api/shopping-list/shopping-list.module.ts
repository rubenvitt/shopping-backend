import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {DatabaseConstants} from "../../database/constants";
import {ShoppingListController} from "./shopping-list.controller";
import {ShoppingListService} from "./shopping-list.service";
import {User, UserSchema} from "../../users/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [ShoppingListController],
    providers: [ShoppingListService]
})
export class ShoppingListModule {}
