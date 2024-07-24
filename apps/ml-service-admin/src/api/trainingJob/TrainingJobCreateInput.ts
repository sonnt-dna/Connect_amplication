import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";
import { DatasetWhereUniqueInput } from "../dataset/DatasetWhereUniqueInput";

export type TrainingJobCreateInput = {
  status?: "Option1" | null;
  endTime?: Date | null;
  startTime?: Date | null;
  model?: ModelWhereUniqueInput | null;
  dataset?: DatasetWhereUniqueInput | null;
};
