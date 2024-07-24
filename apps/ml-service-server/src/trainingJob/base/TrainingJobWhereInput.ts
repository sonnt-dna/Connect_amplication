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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumTrainingJobStatus } from "./EnumTrainingJobStatus";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ModelWhereUniqueInput } from "../../model/base/ModelWhereUniqueInput";
import { DatasetWhereUniqueInput } from "../../dataset/base/DatasetWhereUniqueInput";

@InputType()
class TrainingJobWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumTrainingJobStatus,
  })
  @IsEnum(EnumTrainingJobStatus)
  @IsOptional()
  @Field(() => EnumTrainingJobStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ModelWhereUniqueInput)
  @IsOptional()
  @Field(() => ModelWhereUniqueInput, {
    nullable: true,
  })
  model?: ModelWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DatasetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DatasetWhereUniqueInput)
  @IsOptional()
  @Field(() => DatasetWhereUniqueInput, {
    nullable: true,
  })
  dataset?: DatasetWhereUniqueInput;
}

export { TrainingJobWhereInput as TrainingJobWhereInput };