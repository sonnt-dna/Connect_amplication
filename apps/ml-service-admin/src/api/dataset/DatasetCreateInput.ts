import { TrainingJobCreateNestedManyWithoutDatasetsInput } from "./TrainingJobCreateNestedManyWithoutDatasetsInput";

export type DatasetCreateInput = {
  name?: string | null;
  source?: string | null;
  size?: number | null;
  format?: "Option1" | null;
  trainingJobs?: TrainingJobCreateNestedManyWithoutDatasetsInput;
};
