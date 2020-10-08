import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";
import {ShoppingListService} from "./shopping-list.service";
import {CreateListModel} from "./create-list.model";

@Controller()
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
    constructor(private shoppingListService: ShoppingListService) {
    }

    @Get('/')
    getAllLists() {
        return [
            {id: '', name: 'List 1', size: 3}, {id: '', name: 'List 2', size: 4}
        ]
    }

    @Post('/')
    createNewList(@Body() requestBody: CreateListModel) {
        return this.shoppingListService.createList(requestBody);
    }
}
