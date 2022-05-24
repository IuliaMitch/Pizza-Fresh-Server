import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, isString, IsString } from "class-validator"

export class CreateProductDto {
    @IsString()
    @ApiProperty({
        description: "Nome do Produto",
        example: 'Pizza de Mussarela'
    })
    name: string
    @IsNumber()
    @ApiProperty({
        description: "Preço do produto",
        example: 19.99
    })
    price: number
    @IsString()
    @ApiProperty({
        description: 'Descrição do produto',
        example: 'Queijo mussarela fino do fino, massa fina e borda recheada de catupiry'
    })
    description: string
    @IsString()
    @ApiProperty({
        description: "Imagem do produto",
        example: "https://s2.glbimg.com/wMQRG2vmN_dDJ-1HrSwGOKEbZak=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/n/G9IuruRaezxqgmwozOyg/capa-materia-gshow-49-.png"
    })
    image: string
}
