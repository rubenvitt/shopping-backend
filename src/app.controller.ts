import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/')
    mainRoute() {
        return {
            status: 'RUNNING'
        }
    }

    @Get('/api/version')
    apiVersion() {
        return {
            apiVersion: '1.0'
        }
    }
}
