import { Prediction as TPrediction } from "../api/prediction/Prediction";

export const PREDICTION_TITLE_FIELD = "id";

export const PredictionTitle = (record: TPrediction): string => {
  return record.id?.toString() || String(record.id);
};
