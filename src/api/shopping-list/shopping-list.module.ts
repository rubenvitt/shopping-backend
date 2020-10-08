import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {DatabaseConstants} from "../../database/constants";
import {ShoppingListController} from "./shopping-list.controller";

@Module({
    imports: [MongooseModule.forRoot(DatabaseConstants.url)],
    controllers: [ShoppingListController],
})
export class ShoppingListModule {}
