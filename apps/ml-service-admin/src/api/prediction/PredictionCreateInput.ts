import { InputJsonValue } from "../../types";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type PredictionCreateInput = {
  inputData?: InputJsonValue;
  outputData?: InputJsonValue;
  predictedAt?: Date | null;
  model?: ModelWhereUniqueInput | null;
};
