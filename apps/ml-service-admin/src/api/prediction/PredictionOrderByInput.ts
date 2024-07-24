import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  inputData?: SortOrder;
  outputData?: SortOrder;
  predictedAt?: SortOrder;
  modelId?: SortOrder;
};
