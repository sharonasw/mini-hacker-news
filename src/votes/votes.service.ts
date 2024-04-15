import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote, VoteDocument } from './schemas/vote.schema';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VotesService {
    constructor(
        @InjectModel(Vote.name) private readonly voteModel: Model<VoteDocument>,
    ) {}

    async findById(id: string): Promise<Vote> {
        return this.voteModel.findById(id).populate('post').exec();
    }

    async create(createVoteDto: CreateVoteDto): Promise<Vote> {
        const createdVote = new this.voteModel(createVoteDto);
        return createdVote.save();
    }

    async findByPostId(postId: string): Promise<Vote[]> {
        return this.voteModel.find({ post: postId }).exec();
    }

    async findByUserId(userId: string): Promise<Vote[]> {
        return this.voteModel.find({ userId }).exec();
    }


    async getTotalVotesForPost(postId: string): Promise<number> {
        try {
            const votes = await this.voteModel.find({ post: postId }).exec();
            if (!votes) {
                throw new NotFoundException(`Votes for post ${postId} not found`);
            }
            return votes.reduce((total, vote) => total + vote.value, 0);
        } catch (error) {
            // Handle the error
            console.error(`Error fetching votes for post ${postId}:`, error);
            throw new InternalServerErrorException('Failed to fetch votes for post');
        }
    }

}