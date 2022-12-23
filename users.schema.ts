import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
class User {
    @Field()
    id!: number

    @Field()
    name!: string

    @Field()
    email!: string   
}

@InputType()
export class UserInput {
    @Field()
    name!: string

    @Field()
    email!: string
}