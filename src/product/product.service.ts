/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './DTO/create-product.dto';
import { UpdateProductDto } from './DTO/update-product.dto';
import { Product } from './entities/product.entity';
import { handleError } from 'utils/handle-error.util';


@Injectable()
export class ProductService {
  

  tables: Product[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if(!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`)

    }

    return record;
  }

  async findOne(id: string): Promise<Product> {
 
    return this.findById(id);
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const data: Product = { ...dto };

    return this.prisma.product.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id)
    const data: Partial<Product> = {...dto}

    return this.prisma.product.update({
      where: {
        id
      },
      data,
    })
    .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.product.delete({
      where: {
        id
      }
    })
  }


}
