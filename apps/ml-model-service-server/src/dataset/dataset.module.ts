import { Module } from "@nestjs/common";
import { DatasetModuleBase } from "./base/dataset.module.base";
import { DatasetService } from "./dataset.service";
import { DatasetController } from "./dataset.controller";
import { DatasetResolver } from "./dataset.resolver";

@Module({
  imports: [DatasetModuleBase],
  controllers: [DatasetController],
  providers: [DatasetService, DatasetResolver],
  exports: [DatasetService],
})
export class DatasetModule {}
