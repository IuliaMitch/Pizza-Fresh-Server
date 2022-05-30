/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private userSelect = {
      id: true,
      nickname: true,
      name: true,
      password: false,
      image: true,
      createdAt: true,
      updatedAt: true,
    
  }
  

  tables: User[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: this.userSelect,
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

    if(dto.password != dto.confirmPassword){
      throw new BadRequestException('As senhas informadas devem ser iguais!')
    }

    delete dto.confirmPassword;
    const data: User = { 
      ...dto,
      password: await bcrypt.hash(dto.password, 10) 
    };

    return this.prisma.user.create({ 
      data,
      select: this.userSelect,
     }).catch(handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id)

    if(dto.password) {
      if(dto.password != dto.confirmPassword){
        throw new BadRequestException('As senhas informadas devem ser iguais!')
      }

    }



    delete dto.confirmPassword;

    const data: Partial<User> = {
      ...dto
    }

    if(data.password){
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: {
        id
      },
      data,
      select: this.userSelect,
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }


}
