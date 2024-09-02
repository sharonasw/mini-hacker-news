import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ versionKey: false })
export class Post extends Document {
  @Prop()
    content: string;
  @Prop()
    votes: number;  
}

export const PostSchema = SchemaFactory.createForClass(Post);
