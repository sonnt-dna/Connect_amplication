import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PredictionService } from "./prediction.service";
import { PredictionControllerBase } from "./base/prediction.controller.base";

@swagger.ApiTags("predictions")
@common.Controller("predictions")
export class PredictionController extends PredictionControllerBase {
  constructor(protected readonly service: PredictionService) {
    super(service);
  }
}
