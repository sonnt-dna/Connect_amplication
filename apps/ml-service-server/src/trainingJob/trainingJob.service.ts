import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingJobServiceBase } from "./base/trainingJob.service.base";

@Injectable()
export class TrainingJobService extends TrainingJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
