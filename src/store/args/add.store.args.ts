import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddStoreArgs {
  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}

@InputType()
export class UpdateStoreArgs {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field(() => Int)
  price: number;
}
