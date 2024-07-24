import * as graphql from "@nestjs/graphql";
import { TrainingJobResolverBase } from "./base/trainingJob.resolver.base";
import { TrainingJob } from "./base/TrainingJob";
import { TrainingJobService } from "./trainingJob.service";

@graphql.Resolver(() => TrainingJob)
export class TrainingJobResolver extends TrainingJobResolverBase {
  constructor(protected readonly service: TrainingJobService) {
    super(service);
  }
}
