/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';

@Controller('table')
export class TableController {

    @Get() 
    findAll() {
        return 'Buscar todas as Mesas'
    }

    @Post()
    create() {
        return 'Criar uma mesa'
    }

}
