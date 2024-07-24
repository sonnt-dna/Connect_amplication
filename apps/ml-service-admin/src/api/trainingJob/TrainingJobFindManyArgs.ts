import { TrainingJobWhereInput } from "./TrainingJobWhereInput";
import { TrainingJobOrderByInput } from "./TrainingJobOrderByInput";

export type TrainingJobFindManyArgs = {
  where?: TrainingJobWhereInput;
  orderBy?: Array<TrainingJobOrderByInput>;
  skip?: number;
  take?: number;
};
