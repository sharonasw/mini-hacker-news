import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Post()
  async create(@Body() createPostDto: { content: string }): Promise<PostModel> {
    return this.postsService.create(createPostDto);
  }
}
