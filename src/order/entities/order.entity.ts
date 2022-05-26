import { Product } from "src/product/entities/product.entity";
import { Table } from "src/TableModule/entities/table.entity";
import { User } from "src/user/entities/user.entity";

export class Order {
    id?: string;
    user: User;
    table: Table;
    createdAt?: Date;
    updatedAt?: Date;
    products?: Product[]

}
