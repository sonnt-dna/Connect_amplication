import { InputJsonValue } from "../../types";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type PredictionUpdateInput = {
  inputData?: InputJsonValue;
  outputData?: InputJsonValue;
  predictedAt?: Date | null;
  model?: ModelWhereUniqueInput | null;
};
