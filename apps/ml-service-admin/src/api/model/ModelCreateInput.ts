import { TrainingJobCreateNestedManyWithoutModelsInput } from "./TrainingJobCreateNestedManyWithoutModelsInput";
import { PredictionCreateNestedManyWithoutModelsInput } from "./PredictionCreateNestedManyWithoutModelsInput";

export type ModelCreateInput = {
  status?: "Option1" | null;
  accuracy?: number | null;
  name?: string | null;
  version?: string | null;
  trainingJobs?: TrainingJobCreateNestedManyWithoutModelsInput;
  predictions?: PredictionCreateNestedManyWithoutModelsInput;
};
