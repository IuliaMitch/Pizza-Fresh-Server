import { TableModule } from './TableModule/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableController } from './TableModule/table.controller';
import { TableService } from './TableModule/table.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
        TableModule,
        PrismaModule,
        ProductModule,
        UserModule, ],
  controllers: [AppController, TableController],
  providers: [AppService, TableService],
})
export class AppModule {}
