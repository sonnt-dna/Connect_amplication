import { TrainingJobUpdateManyWithoutDatasetsInput } from "./TrainingJobUpdateManyWithoutDatasetsInput";

export type DatasetUpdateInput = {
  name?: string | null;
  source?: string | null;
  size?: number | null;
  format?: "Option1" | null;
  trainingJobs?: TrainingJobUpdateManyWithoutDatasetsInput;
};
