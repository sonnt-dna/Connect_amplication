import { TrainingResult as TTrainingResult } from "../api/trainingResult/TrainingResult";

export const TRAININGRESULT_TITLE_FIELD = "id";

export const TrainingResultTitle = (record: TTrainingResult): string => {
  return record.id?.toString() || String(record.id);
};
