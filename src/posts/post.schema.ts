import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Post {
  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
