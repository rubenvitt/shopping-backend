import {Controller, Get, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Request} from "@nestjs/common";

@Controller()
@UseGuards(JwtAuthGuard)
export class ApiController {
    @Get('/version')
    apiVersion(@Request() request) {
        return {user: request.user};
    }
}
