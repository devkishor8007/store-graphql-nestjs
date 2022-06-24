import { Field, Int, ObjectType } from '@nestjs/graphql';
// through this can be work a/c to our entity
// can be expose all
// if we don't expose any field, we don't define the field
// based on this resolver can be worked
@ObjectType()
export class Store {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
