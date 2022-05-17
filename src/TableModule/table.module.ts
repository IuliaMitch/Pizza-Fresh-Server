import { TableService } from './table.service';
import { TableController } from './table.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  exports: [],
  imports: [],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
