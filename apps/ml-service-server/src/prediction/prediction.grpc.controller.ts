import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PredictionService } from "./prediction.service";
import { PredictionGrpcControllerBase } from "./base/prediction.grpc.controller.base";

@swagger.ApiTags("predictions")
@common.Controller("predictions")
export class PredictionGrpcController extends PredictionGrpcControllerBase {
  constructor(protected readonly service: PredictionService) {
    super(service);
  }
}
