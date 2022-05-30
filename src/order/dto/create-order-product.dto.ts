import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto {
    @IsUUID()
    @ApiProperty({
        description: 'ID do Produto',
        example: '2c65b056-d68b-4523-96ec-802feaaa16ef'
    })
    productId: string;


    @IsInt()
    @IsPositive()
    @ApiProperty({
        description: 'Quantidade de itens no produto',
        example: 1
    })
    quantity: number;


    @IsString()
    @ApiProperty({
        description: 'Observações do produto',
        example: 'Sem Cebola'
    })
    description: string;

}