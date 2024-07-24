import { SortOrder } from "../../util/SortOrder";

export type DatasetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  source?: SortOrder;
  size?: SortOrder;
  format?: SortOrder;
};
