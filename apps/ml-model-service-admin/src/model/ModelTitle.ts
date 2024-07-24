import { Model as TModel } from "../api/model/Model";

export const MODEL_TITLE_FIELD = "id";

export const ModelTitle = (record: TModel): string => {
  return record.id?.toString() || String(record.id);
};
