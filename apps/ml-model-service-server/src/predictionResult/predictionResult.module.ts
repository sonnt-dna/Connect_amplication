import { Module } from "@nestjs/common";
import { PredictionResultModuleBase } from "./base/predictionResult.module.base";
import { PredictionResultService } from "./predictionResult.service";
import { PredictionResultController } from "./predictionResult.controller";
import { PredictionResultResolver } from "./predictionResult.resolver";

@Module({
  imports: [PredictionResultModuleBase],
  controllers: [PredictionResultController],
  providers: [PredictionResultService, PredictionResultResolver],
  exports: [PredictionResultService],
})
export class PredictionResultModule {}
