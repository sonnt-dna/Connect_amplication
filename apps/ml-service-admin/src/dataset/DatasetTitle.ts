import { Dataset as TDataset } from "../api/dataset/Dataset";

export const DATASET_TITLE_FIELD = "name";

export const DatasetTitle = (record: TDataset): string => {
  return record.name?.toString() || String(record.id);
};
