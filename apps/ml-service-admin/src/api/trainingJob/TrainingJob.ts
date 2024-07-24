import { Model } from "../model/Model";
import { Dataset } from "../dataset/Dataset";

export type TrainingJob = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  endTime: Date | null;
  startTime: Date | null;
  model?: Model | null;
  dataset?: Dataset | null;
};
