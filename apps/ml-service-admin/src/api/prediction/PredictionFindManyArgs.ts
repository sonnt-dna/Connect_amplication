import { PredictionWhereInput } from "./PredictionWhereInput";
import { PredictionOrderByInput } from "./PredictionOrderByInput";

export type PredictionFindManyArgs = {
  where?: PredictionWhereInput;
  orderBy?: Array<PredictionOrderByInput>;
  skip?: number;
  take?: number;
};
