import * as graphql from "@nestjs/graphql";
import { TrainingResultResolverBase } from "./base/trainingResult.resolver.base";
import { TrainingResult } from "./base/TrainingResult";
import { TrainingResultService } from "./trainingResult.service";

@graphql.Resolver(() => TrainingResult)
export class TrainingResultResolver extends TrainingResultResolverBase {
  constructor(protected readonly service: TrainingResultService) {
    super(service);
  }
}
