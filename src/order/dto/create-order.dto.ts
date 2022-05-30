import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive, IsUUID, ValidateNested } from "class-validator";
import { CreateOrderProductDto } from "./create-order-product.dto";

export class CreateOrderDto {
    @IsUUID()
    @ApiProperty({
        description: "ID do usuário que está criando o pedido",
        example: "7f6bdbfe-cdb7-4d3f-ace9-4f342aa33de4"
    })
    userId: string;

    @IsInt()
    @IsPositive()
    @ApiProperty({
        description: "Número da mesa que está realizando o pedido",
        example: 1,
    })
    tableNumber: number;

    @ValidateNested({
        each: true,
    })
    @Type(() => CreateOrderProductDto)
    @ApiProperty({
        description: "Lista com os ID's dos produtos que estão no pedido",
        type: [CreateOrderProductDto]
    })
    products: CreateOrderProductDto[];

}
