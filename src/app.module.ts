import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sweint:WMwm1404$@cluster0.vu0bzpn.mongodb.net/mini-hacker-news'), 
    PostsModule, VotesModule
  ],
})
export class AppModule {}
