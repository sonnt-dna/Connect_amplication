import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModelService } from "./model.service";
import { ModelGrpcControllerBase } from "./base/model.grpc.controller.base";

@swagger.ApiTags("models")
@common.Controller("models")
export class ModelGrpcController extends ModelGrpcControllerBase {
  constructor(protected readonly service: ModelService) {
    super(service);
  }
}
