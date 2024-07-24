import * as graphql from "@nestjs/graphql";
import { DatasetResolverBase } from "./base/dataset.resolver.base";
import { Dataset } from "./base/Dataset";
import { DatasetService } from "./dataset.service";

@graphql.Resolver(() => Dataset)
export class DatasetResolver extends DatasetResolverBase {
  constructor(protected readonly service: DatasetService) {
    super(service);
  }
}
