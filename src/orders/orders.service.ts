import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { v4 as uuidv4 } from 'uuid';

export class Order
{
    constructor(public id:string,public customerId:string)
    {}
}

@Injectable()
export class OrdersService 
{
    public orders : Order[];
    constructor(){this.orders = [];}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = new Order(uuidv4(),createOrderDto.customerId);
        this.orders.push(order);
        return order;
      }
}
