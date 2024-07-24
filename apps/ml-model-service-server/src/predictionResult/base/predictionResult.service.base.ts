/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PredictionResult as PrismaPredictionResult,
} from "@prisma/client";

export class PredictionResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PredictionResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.predictionResult.count(args);
  }

  async predictionResults(
    args: Prisma.PredictionResultFindManyArgs
  ): Promise<PrismaPredictionResult[]> {
    return this.prisma.predictionResult.findMany(args);
  }
  async predictionResult(
    args: Prisma.PredictionResultFindUniqueArgs
  ): Promise<PrismaPredictionResult | null> {
    return this.prisma.predictionResult.findUnique(args);
  }
  async createPredictionResult(
    args: Prisma.PredictionResultCreateArgs
  ): Promise<PrismaPredictionResult> {
    return this.prisma.predictionResult.create(args);
  }
  async updatePredictionResult(
    args: Prisma.PredictionResultUpdateArgs
  ): Promise<PrismaPredictionResult> {
    return this.prisma.predictionResult.update(args);
  }
  async deletePredictionResult(
    args: Prisma.PredictionResultDeleteArgs
  ): Promise<PrismaPredictionResult> {
    return this.prisma.predictionResult.delete(args);
  }
}