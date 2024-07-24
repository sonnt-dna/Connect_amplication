import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingJobService } from "./trainingJob.service";
import { TrainingJobControllerBase } from "./base/trainingJob.controller.base";

@swagger.ApiTags("trainingJobs")
@common.Controller("trainingJobs")
export class TrainingJobController extends TrainingJobControllerBase {
  constructor(protected readonly service: TrainingJobService) {
    super(service);
  }
}
