import { TableModule } from './TableModule/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableController } from './TableModule/table.controller';
import { TableService } from './TableModule/table.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
        TableModule,
        PrismaModule,
        ProductModule,
        UserModule,
        OrderModule, ],
  controllers: [AppController, TableController],
  providers: [AppService, TableService],
})
export class AppModule {}
