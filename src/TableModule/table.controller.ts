/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from './entities/table.entity';
import { CreateTableDto } from './DTO/create-table.dto';
import { TableService } from './table.service';
import { UpdateTableDto } from './DTO/update-table.dto';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma mesa por Id'
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa'
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma mesa por ID'
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto)
  } 
}
