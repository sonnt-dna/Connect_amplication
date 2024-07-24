import { TrainingResultWhereInput } from "./TrainingResultWhereInput";
import { TrainingResultOrderByInput } from "./TrainingResultOrderByInput";

export type TrainingResultFindManyArgs = {
  where?: TrainingResultWhereInput;
  orderBy?: Array<TrainingResultOrderByInput>;
  skip?: number;
  take?: number;
};
