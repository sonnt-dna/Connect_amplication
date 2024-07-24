import { TrainingJob } from "../trainingJob/TrainingJob";
import { Prediction } from "../prediction/Prediction";

export type Model = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  accuracy: number | null;
  name: string | null;
  version: string | null;
  trainingJobs?: Array<TrainingJob>;
  predictions?: Array<Prediction>;
};
