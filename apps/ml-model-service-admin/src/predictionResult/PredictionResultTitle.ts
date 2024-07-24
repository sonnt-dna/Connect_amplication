import { PredictionResult as TPredictionResult } from "../api/predictionResult/PredictionResult";

export const PREDICTIONRESULT_TITLE_FIELD = "id";

export const PredictionResultTitle = (record: TPredictionResult): string => {
  return record.id?.toString() || String(record.id);
};
