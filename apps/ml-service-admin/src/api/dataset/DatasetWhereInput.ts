import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TrainingJobListRelationFilter } from "../trainingJob/TrainingJobListRelationFilter";

export type DatasetWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  source?: StringNullableFilter;
  size?: IntNullableFilter;
  format?: "Option1";
  trainingJobs?: TrainingJobListRelationFilter;
};
