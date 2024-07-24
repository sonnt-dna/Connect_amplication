import { Module } from "@nestjs/common";
import { TrainingResultModuleBase } from "./base/trainingResult.module.base";
import { TrainingResultService } from "./trainingResult.service";
import { TrainingResultController } from "./trainingResult.controller";
import { TrainingResultResolver } from "./trainingResult.resolver";

@Module({
  imports: [TrainingResultModuleBase],
  controllers: [TrainingResultController],
  providers: [TrainingResultService, TrainingResultResolver],
  exports: [TrainingResultService],
})
export class TrainingResultModule {}
