/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
    constructor(private tableService: TableService) {}

    @Get() 
    findAll() {
        return this.tableService.findAll()
    }

    @Post()
    create() {
        return this.tableService.create()

    }

}
