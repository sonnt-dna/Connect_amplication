import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatasetServiceBase } from "./base/dataset.service.base";

@Injectable()
export class DatasetService extends DatasetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
