import * as graphql from "@nestjs/graphql";
import { PredictionResultResolverBase } from "./base/predictionResult.resolver.base";
import { PredictionResult } from "./base/PredictionResult";
import { PredictionResultService } from "./predictionResult.service";

@graphql.Resolver(() => PredictionResult)
export class PredictionResultResolver extends PredictionResultResolverBase {
  constructor(protected readonly service: PredictionResultService) {
    super(service);
  }
}
