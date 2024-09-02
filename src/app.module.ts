import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { OrdersModule } from './orders/orders.module';



@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env.dev',}),
    MongooseModule.forRoot('mongodb+srv://sweint:WMwm1404$@cluster0.vu0bzpn.mongodb.net/mini-hacker-news'), 
    PostsModule, OrdersModule
  ],
})
export class AppModule {}
