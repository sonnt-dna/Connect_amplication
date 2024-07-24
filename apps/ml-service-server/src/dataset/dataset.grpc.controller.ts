import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatasetService } from "./dataset.service";
import { DatasetGrpcControllerBase } from "./base/dataset.grpc.controller.base";

@swagger.ApiTags("datasets")
@common.Controller("datasets")
export class DatasetGrpcController extends DatasetGrpcControllerBase {
  constructor(protected readonly service: DatasetService) {
    super(service);
  }
}
