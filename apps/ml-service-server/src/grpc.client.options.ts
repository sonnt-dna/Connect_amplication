import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["model", "trainingjob", "dataset", "prediction"],
    protoPath: [
      "src/model/model.proto",
      "src/trainingjob/trainingjob.proto",
      "src/dataset/dataset.proto",
      "src/prediction/prediction.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
