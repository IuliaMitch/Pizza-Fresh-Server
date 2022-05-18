import { TableModule } from './TableModule/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableController } from './TableModule/table.controller';
import { TableService } from './TableModule/table.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
        TableModule,
        PrismaModule, ],
  controllers: [AppController, TableController],
  providers: [AppService, TableService],
})
export class AppModule {}
