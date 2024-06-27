import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ClientApiService } from "./clientapi.service";

@swagger.ApiTags("clientApis")
@common.Controller("clientApis")
export class ClientApiController {
  constructor(protected readonly service: ClientApiService) {}
}
