import { Controller, Post, Body, Param, Get, NotFoundException, HttpException } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { Vote } from './schemas/vote.schema';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  // @Post()
  // async create(@Body() createVoteDto: CreateVoteDto) {
  //   const newVote = this.votesService.create(createVoteDto);
  //   if(!newVote)
  //     throw new HttpException("")
  // }

  // @Get(':id')
  // async getById(@Param('id') voteId: string): Promise<Vote> {
  //   const vote = await this.votesService.findById(voteId);
  //   if (!vote) {
  //     throw new NotFoundException(`Vote with id ${voteId} not found`);
  //   }
  //   return vote;
  // }

//   @Get('posts/:postId')
//   async getVotesForPost(@Param('postId') postId: string) {
//     return this.votesService.findByPostId(postId);
//   }

//   @Get('users/:userId')
//   async getVotesByUser(@Param('userId') userId: string) {
//     return this.votesService.findByUserId(userId);
//   }

  // @Get('posts/:postId/total-votes')
  // async getTotalVotesForPost(@Param('postId') postId: string) {
  //   return this.votesService.getTotalVotesForPost(postId);
  // }
}
