import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredictionServiceBase } from "./base/prediction.service.base";

@Injectable()
export class PredictionService extends PredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
