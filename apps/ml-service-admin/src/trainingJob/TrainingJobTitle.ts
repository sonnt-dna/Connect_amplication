import { TrainingJob as TTrainingJob } from "../api/trainingJob/TrainingJob";

export const TRAININGJOB_TITLE_FIELD = "id";

export const TrainingJobTitle = (record: TTrainingJob): string => {
  return record.id?.toString() || String(record.id);
};
