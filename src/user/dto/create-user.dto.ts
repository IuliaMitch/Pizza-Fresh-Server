import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({
        description: 'Nome do Usuário, Deve ser unico',
        example: 'iuliadb',

    })
    nickname: string;
    @IsString()
    @ApiProperty({
        description: 'Nome do Usuário. Apenas para exibição',
        example: 'Iulia Mitch',

    })
    name: string;
    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Senha muito fraca',
      })
    @ApiProperty({
        description: 'Senha do usuário para login',
        example: 'Abcd@1234',

    })
    password: string;
    @IsString()
    @ApiProperty({
        description: 'A confirmação da senha deve ser igual a senha',
        example: 'Abcd@1234',

    })
    confirmPassword: string;
    @IsUrl()
    @ApiProperty({
        description: 'Imagem de perfil do usuário',
        example: 'https://avatars.githubusercontent.com/u/85199887?v=4',

    })
    image: string;
}

