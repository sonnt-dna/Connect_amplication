/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrainingJobWhereInput } from "./TrainingJobWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TrainingJobOrderByInput } from "./TrainingJobOrderByInput";

@ArgsType()
class TrainingJobFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TrainingJobWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TrainingJobWhereInput, { nullable: true })
  @Type(() => TrainingJobWhereInput)
  where?: TrainingJobWhereInput;

  @ApiProperty({
    required: false,
    type: [TrainingJobOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TrainingJobOrderByInput], { nullable: true })
  @Type(() => TrainingJobOrderByInput)
  orderBy?: Array<TrainingJobOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TrainingJobFindManyArgs as TrainingJobFindManyArgs };