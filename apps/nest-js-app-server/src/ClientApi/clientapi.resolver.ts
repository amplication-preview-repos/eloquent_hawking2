import * as graphql from "@nestjs/graphql";
import { ClientApiService } from "./clientapi.service";

export class ClientApiResolver {
  constructor(protected readonly service: ClientApiService) {}
}
