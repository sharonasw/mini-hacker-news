import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {CreatePostDto } from './dtos/create-post-dto'
import {UpdatePostDto } from './dtos/update-post-dto'
import { Model } from 'mongoose';
import { Post, PostDocument, PostSchema } from './post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private readonly postModel: Model<PostDocument>) {}

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async vote(updatePostDto: UpdatePostDto)
  {       
    const currentPost = await this.postModel.findById(updatePostDto.postId);
    if(updatePostDto.voteValue!=1 && updatePostDto.voteValue!=-1)
      throw new HttpException("wrong input",HttpStatus.BAD_REQUEST);
    
    const updatePost = await this.postModel.findOneAndUpdate({"_id":updatePostDto.postId},{$inc:{votes:updatePostDto.voteValue}});
    if(!updatePost)
      throw new HttpException("service unavailable",HttpStatus.SERVICE_UNAVAILABLE);
    return updatePost;
  }
}
