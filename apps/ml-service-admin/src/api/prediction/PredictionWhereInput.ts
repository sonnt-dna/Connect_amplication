import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type PredictionWhereInput = {
  id?: StringFilter;
  inputData?: JsonFilter;
  outputData?: JsonFilter;
  predictedAt?: DateTimeNullableFilter;
  model?: ModelWhereUniqueInput;
};
