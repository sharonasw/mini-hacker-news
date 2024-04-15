import { Module } from '@nestjs/common';
import { VotesController } from './votes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VoteSchema } from './schemas/vote.schema';
import { VotesService } from './votes.service';


@Module({  
  imports: [
    MongooseModule.forFeature([{ name: 'Vote', schema: VoteSchema }]),
  ],
  controllers: [VotesController],
  providers:[VotesService]
})
export class VotesModule {}
