import { Module } from "@nestjs/common";
import { PredictionModuleBase } from "./base/prediction.module.base";
import { PredictionService } from "./prediction.service";
import { PredictionController } from "./prediction.controller";
import { PredictionGrpcController } from "./prediction.grpc.controller";
import { PredictionResolver } from "./prediction.resolver";

@Module({
  imports: [PredictionModuleBase],
  controllers: [PredictionController, PredictionGrpcController],
  providers: [PredictionService, PredictionResolver],
  exports: [PredictionService],
})
export class PredictionModule {}
