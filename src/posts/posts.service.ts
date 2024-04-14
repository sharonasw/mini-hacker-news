import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostSchema } from './post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async create(createPostDto: { content: string }): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }
}
