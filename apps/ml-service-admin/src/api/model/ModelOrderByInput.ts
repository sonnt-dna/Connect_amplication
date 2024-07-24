import { SortOrder } from "../../util/SortOrder";

export type ModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  accuracy?: SortOrder;
  name?: SortOrder;
  version?: SortOrder;
};
