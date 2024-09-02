import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Post } from '../../posts/post.schema';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote extends Document {
  @Prop({ type: 'ObjectId', ref: 'Post', required: true })
  post: Post;
  
  @Prop({ required: true })
  value: number; // 1 for upvote, -1 for downvote
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
