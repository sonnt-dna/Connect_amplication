import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingResultService } from "./trainingResult.service";
import { TrainingResultControllerBase } from "./base/trainingResult.controller.base";

@swagger.ApiTags("trainingResults")
@common.Controller("trainingResults")
export class TrainingResultController extends TrainingResultControllerBase {
  constructor(protected readonly service: TrainingResultService) {
    super(service);
  }
}
