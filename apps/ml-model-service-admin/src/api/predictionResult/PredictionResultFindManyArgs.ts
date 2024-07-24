import { PredictionResultWhereInput } from "./PredictionResultWhereInput";
import { PredictionResultOrderByInput } from "./PredictionResultOrderByInput";

export type PredictionResultFindManyArgs = {
  where?: PredictionResultWhereInput;
  orderBy?: Array<PredictionResultOrderByInput>;
  skip?: number;
  take?: number;
};
