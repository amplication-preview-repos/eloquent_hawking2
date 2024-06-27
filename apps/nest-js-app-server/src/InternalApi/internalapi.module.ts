import { Module } from "@nestjs/common";
import { InternalApiService } from "./internalapi.service";
import { InternalApiController } from "./internalapi.controller";
import { InternalApiResolver } from "./internalapi.resolver";

@Module({
  controllers: [InternalApiController],
  providers: [InternalApiService, InternalApiResolver],
  exports: [InternalApiService],
})
export class InternalApiModule {}
