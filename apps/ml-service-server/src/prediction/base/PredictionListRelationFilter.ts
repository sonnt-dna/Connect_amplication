/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PredictionWhereInput } from "./PredictionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PredictionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => PredictionWhereInput)
  @IsOptional()
  @Field(() => PredictionWhereInput, {
    nullable: true,
  })
  every?: PredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => PredictionWhereInput)
  @IsOptional()
  @Field(() => PredictionWhereInput, {
    nullable: true,
  })
  some?: PredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => PredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => PredictionWhereInput)
  @IsOptional()
  @Field(() => PredictionWhereInput, {
    nullable: true,
  })
  none?: PredictionWhereInput;
}
export { PredictionListRelationFilter as PredictionListRelationFilter };