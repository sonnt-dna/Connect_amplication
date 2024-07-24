import { TrainingJob } from "../trainingJob/TrainingJob";

export type Dataset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  source: string | null;
  size: number | null;
  format?: "Option1" | null;
  trainingJobs?: Array<TrainingJob>;
};
