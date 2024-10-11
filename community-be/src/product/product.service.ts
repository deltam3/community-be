import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const newProduct = new Product();

    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.price = createProductDto.price;
    return await this.productRepo.save(newProduct);
  }
  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }
  findOne(id: string): Promise<Product> {
    return this.productRepo.findOneBy({ id: id });
  }
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<string> {
    await this.productRepo.update(id, updateProductDto);
    return 'Product 업데이트 성공';
  }

  remove(id: string): string {
    this.productRepo.delete({ id: id });
    return 'Product 삭제 성공';
  }
}
