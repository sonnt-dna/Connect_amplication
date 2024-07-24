import { TrainingJobUpdateManyWithoutModelsInput } from "./TrainingJobUpdateManyWithoutModelsInput";
import { PredictionUpdateManyWithoutModelsInput } from "./PredictionUpdateManyWithoutModelsInput";

export type ModelUpdateInput = {
  status?: "Option1" | null;
  accuracy?: number | null;
  name?: string | null;
  version?: string | null;
  trainingJobs?: TrainingJobUpdateManyWithoutModelsInput;
  predictions?: PredictionUpdateManyWithoutModelsInput;
};
