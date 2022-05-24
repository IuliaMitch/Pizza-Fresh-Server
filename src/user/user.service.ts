/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  

  tables: User[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if(!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`)

    }

    return record;
  }

  async findOne(id: string): Promise<User> {
 
    return this.findById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return this.prisma.user.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id)
    const data: Partial<User> = {...dto}

    return this.prisma.user.update({
      where: {
        id
      },
      data,
    })
    .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }

  handleError(error: Error): undefined   {
    const errorLines = error.message?.split('\n')
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim()
    throw new UnprocessableEntityException(lastErrorLine || "Algum erro ocorreu ao executar a operação")
    
  }
}
