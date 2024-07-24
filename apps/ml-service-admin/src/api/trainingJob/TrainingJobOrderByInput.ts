import { SortOrder } from "../../util/SortOrder";

export type TrainingJobOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  endTime?: SortOrder;
  startTime?: SortOrder;
  modelId?: SortOrder;
  datasetId?: SortOrder;
};
