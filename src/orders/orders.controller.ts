import { Controller,Get, Post, Put, Body, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController 
{
    constructor(private readonly ordersService: OrdersService) {}

//   @Get()
//   async findAll(): Promise<PostModel[]> {
//     return this.postsService.findAll();
//   }
  
  @Post()  
  async create(@Body() CreateOrderDto) {
    const newOrder = await this.ordersService.create(CreateOrderDto);  
    if(!newOrder)
      throw new HttpException('Server unavailable',HttpStatus.SERVICE_UNAVAILABLE);
    return newOrder;
  }
}
