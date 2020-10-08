import {Controller, Get} from '@nestjs/common';

@Controller()
export class ShoppingListController {
    @Get('/')
    mainRoute() {
        return {
            status: 'RUNNING'
        }
    }
}
