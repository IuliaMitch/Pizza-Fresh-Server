import { TableModule } from './TableModule/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableController } from './TableModule/table.controller';

@Module({
  imports: [
        TableModule, ],
  controllers: [AppController, TableController],
  providers: [AppService],
})
export class AppModule {}
