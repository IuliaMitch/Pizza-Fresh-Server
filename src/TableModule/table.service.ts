/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './DTO/create-table.dto';

@Injectable()
export class TableService {
    
    findAll() {
        return 'Buscar todas as Mesas'
    }
    create(createTableDto: CreateTableDto) {
        return 'Criar uma mesa: ' + JSON.stringify(createTableDto)
    }

}
