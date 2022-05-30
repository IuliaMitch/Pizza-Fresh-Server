/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateTableDto } from './DTO/create-table.dto';
import { UpdateTableDto } from './DTO/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }

    return record;
  }

  async findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  async create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);
    const data: Partial<Table> = { ...dto };

    return this.prisma.table
      .update({
        where: {
          id,
        },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.table.delete({
      where: {
        id,
      },
    });
  }
}
