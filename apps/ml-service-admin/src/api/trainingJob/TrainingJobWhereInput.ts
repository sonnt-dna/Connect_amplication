import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";

export type TrainingJobWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  endTime?: DateTimeNullableFilter;
  startTime?: DateTimeNullableFilter;
  model?: ModelWhereUniqueInput;
  dataset?: DatasetWhereUniqueInput;
};
