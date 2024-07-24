import * as graphql from "@nestjs/graphql";
import { PredictionResolverBase } from "./base/prediction.resolver.base";
import { Prediction } from "./base/Prediction";
import { PredictionService } from "./prediction.service";

@graphql.Resolver(() => Prediction)
export class PredictionResolver extends PredictionResolverBase {
  constructor(protected readonly service: PredictionService) {
    super(service);
  }
}
