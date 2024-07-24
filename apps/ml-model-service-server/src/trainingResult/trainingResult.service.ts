import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingResultServiceBase } from "./base/trainingResult.service.base";

@Injectable()
export class TrainingResultService extends TrainingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
