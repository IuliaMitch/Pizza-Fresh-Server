import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

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

    @IsUUID(undefined, { each: true })
    @ApiProperty({
        description: "Lista com os ID's dos produtos que estão no pedido",
        example: '["d47e231e-f589-470a-83d6-68c5b4225be4", ...]',
    })
    products: string[];

}
