import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredictionResultServiceBase } from "./base/predictionResult.service.base";

@Injectable()
export class PredictionResultService extends PredictionResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
