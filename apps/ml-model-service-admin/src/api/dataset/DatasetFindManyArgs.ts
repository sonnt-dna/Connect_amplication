import { DatasetWhereInput } from "./DatasetWhereInput";
import { DatasetOrderByInput } from "./DatasetOrderByInput";

export type DatasetFindManyArgs = {
  where?: DatasetWhereInput;
  orderBy?: Array<DatasetOrderByInput>;
  skip?: number;
  take?: number;
};
