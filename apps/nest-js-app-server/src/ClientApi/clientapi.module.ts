import { Module } from "@nestjs/common";
import { ClientApiService } from "./clientapi.service";
import { ClientApiController } from "./clientapi.controller";
import { ClientApiResolver } from "./clientapi.resolver";

@Module({
  controllers: [ClientApiController],
  providers: [ClientApiService, ClientApiResolver],
  exports: [ClientApiService],
})
export class ClientApiModule {}
