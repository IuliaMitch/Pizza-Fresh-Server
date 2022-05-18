import { TableService } from './table.service';
import { TableController } from './table.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [],
  imports: [PrismaModule],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
