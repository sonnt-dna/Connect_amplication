/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PredictionResult } from "./PredictionResult";
import { PredictionResultCountArgs } from "./PredictionResultCountArgs";
import { PredictionResultFindManyArgs } from "./PredictionResultFindManyArgs";
import { PredictionResultFindUniqueArgs } from "./PredictionResultFindUniqueArgs";
import { DeletePredictionResultArgs } from "./DeletePredictionResultArgs";
import { PredictionResultService } from "../predictionResult.service";
@graphql.Resolver(() => PredictionResult)
export class PredictionResultResolverBase {
  constructor(protected readonly service: PredictionResultService) {}

  async _predictionResultsMeta(
    @graphql.Args() args: PredictionResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PredictionResult])
  async predictionResults(
    @graphql.Args() args: PredictionResultFindManyArgs
  ): Promise<PredictionResult[]> {
    return this.service.predictionResults(args);
  }

  @graphql.Query(() => PredictionResult, { nullable: true })
  async predictionResult(
    @graphql.Args() args: PredictionResultFindUniqueArgs
  ): Promise<PredictionResult | null> {
    const result = await this.service.predictionResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PredictionResult)
  async deletePredictionResult(
    @graphql.Args() args: DeletePredictionResultArgs
  ): Promise<PredictionResult | null> {
    try {
      return await this.service.deletePredictionResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}