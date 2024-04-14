import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
