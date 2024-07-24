import { Module } from "@nestjs/common";
import { TrainingJobModuleBase } from "./base/trainingJob.module.base";
import { TrainingJobService } from "./trainingJob.service";
import { TrainingJobController } from "./trainingJob.controller";
import { TrainingJobGrpcController } from "./trainingJob.grpc.controller";
import { TrainingJobResolver } from "./trainingJob.resolver";

@Module({
  imports: [TrainingJobModuleBase],
  controllers: [TrainingJobController, TrainingJobGrpcController],
  providers: [TrainingJobService, TrainingJobResolver],
  exports: [TrainingJobService],
})
export class TrainingJobModule {}
