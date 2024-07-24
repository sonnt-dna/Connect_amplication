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
import { Dataset } from "./Dataset";
import { DatasetCountArgs } from "./DatasetCountArgs";
import { DatasetFindManyArgs } from "./DatasetFindManyArgs";
import { DatasetFindUniqueArgs } from "./DatasetFindUniqueArgs";
import { DeleteDatasetArgs } from "./DeleteDatasetArgs";
import { DatasetService } from "../dataset.service";
@graphql.Resolver(() => Dataset)
export class DatasetResolverBase {
  constructor(protected readonly service: DatasetService) {}

  async _datasetsMeta(
    @graphql.Args() args: DatasetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dataset])
  async datasets(
    @graphql.Args() args: DatasetFindManyArgs
  ): Promise<Dataset[]> {
    return this.service.datasets(args);
  }

  @graphql.Query(() => Dataset, { nullable: true })
  async dataset(
    @graphql.Args() args: DatasetFindUniqueArgs
  ): Promise<Dataset | null> {
    const result = await this.service.dataset(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dataset)
  async deleteDataset(
    @graphql.Args() args: DeleteDatasetArgs
  ): Promise<Dataset | null> {
    try {
      return await this.service.deleteDataset(args);
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
