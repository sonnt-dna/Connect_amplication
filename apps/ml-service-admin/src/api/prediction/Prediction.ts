import { JsonValue } from "type-fest";
import { Model } from "../model/Model";

export type Prediction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  inputData: JsonValue;
  outputData: JsonValue;
  predictedAt: Date | null;
  model?: Model | null;
};
