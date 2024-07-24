import { Dataset as TDataset } from "../api/dataset/Dataset";

export const DATASET_TITLE_FIELD = "id";

export const DatasetTitle = (record: TDataset): string => {
  return record.id?.toString() || String(record.id);
};
