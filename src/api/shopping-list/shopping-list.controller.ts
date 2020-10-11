import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";
import {ShoppingListService} from "./shopping-list.service";
import {CreateListModel} from "./create-list.model";

@Controller()
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
    constructor(private shoppingListService: ShoppingListService) {
    }

    @Get('/')
    getAllLists(@Request() request) {
        return this.shoppingListService.findLists(request.user);
    }

    @Post('/create')
    createNewList(@Body() requestBody: CreateListModel, @Request() request) {
        console.log('ABC');
        return this.shoppingListService.createList(requestBody, request.user);
    }
}
