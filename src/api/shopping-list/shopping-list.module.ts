import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {DatabaseConstants} from "../../database/constants";
import {ShoppingListController} from "./shopping-list.controller";
import {ShoppingListService} from "./shopping-list.service";

@Module({
    imports: [MongooseModule.forRoot(DatabaseConstants.url)],
    controllers: [ShoppingListController],
    providers: [ShoppingListService]
})
export class ShoppingListModule {}
