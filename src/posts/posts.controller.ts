import { Controller, Get, Post, Put, Body, HttpException, HttpStatus  } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.schema';
//import { CreatePostDto } from './dtos/create-post-dto';
import { UpdatePostDto } from './dtos/update-post-dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    const n = 0;
    console.log(n+1);
    return this.postsService.findAll();
  }
  
  @Post()  
  async create(@Body() createPostDto: {'content':string,'votes':number}) {
    const newPost = await this.postsService.create(createPostDto);  
    if(!newPost)
      throw new HttpException('Server unavailable',HttpStatus.SERVICE_UNAVAILABLE);
    return newPost;
  }

  @Put('/vote')  
  async vote(@Body() updatePostDto: UpdatePostDto) {
    const updatedPost = await this.postsService.vote(updatePostDto);  
    if(!updatedPost)
      throw new HttpException('Server unavailable',HttpStatus.SERVICE_UNAVAILABLE);
    return updatedPost;
  }
}
