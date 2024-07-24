import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PredictionResultService } from "./predictionResult.service";
import { PredictionResultControllerBase } from "./base/predictionResult.controller.base";

@swagger.ApiTags("predictionResults")
@common.Controller("predictionResults")
export class PredictionResultController extends PredictionResultControllerBase {
  constructor(protected readonly service: PredictionResultService) {
    super(service);
  }
}
