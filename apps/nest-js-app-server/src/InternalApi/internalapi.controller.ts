import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InternalApiService } from "./internalapi.service";

@swagger.ApiTags("internalApis")
@common.Controller("internalApis")
export class InternalApiController {
  constructor(protected readonly service: InternalApiService) {}
}
