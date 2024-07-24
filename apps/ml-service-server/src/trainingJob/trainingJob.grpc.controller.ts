import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingJobService } from "./trainingJob.service";
import { TrainingJobGrpcControllerBase } from "./base/trainingJob.grpc.controller.base";

@swagger.ApiTags("trainingJobs")
@common.Controller("trainingJobs")
export class TrainingJobGrpcController extends TrainingJobGrpcControllerBase {
  constructor(protected readonly service: TrainingJobService) {
    super(service);
  }
}
