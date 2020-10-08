import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {ApiController} from "./api.controller";
import {RouterModule, Routes} from "nest-router";

const routes: Routes = [
    {
        path: '/api/shopping-list',
        module: ShoppingListModule
    }
]

@Module({
    imports: [MongooseModule.forFeature(), RouterModule.forRoutes(routes), ShoppingListModule],
    controllers: [ApiController]
})
export class ApiModule {}
