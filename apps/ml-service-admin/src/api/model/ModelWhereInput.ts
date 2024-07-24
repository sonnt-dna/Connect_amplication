import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TrainingJobListRelationFilter } from "../trainingJob/TrainingJobListRelationFilter";
import { PredictionListRelationFilter } from "../prediction/PredictionListRelationFilter";

export type ModelWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  accuracy?: FloatNullableFilter;
  name?: StringNullableFilter;
  version?: StringNullableFilter;
  trainingJobs?: TrainingJobListRelationFilter;
  predictions?: PredictionListRelationFilter;
};
