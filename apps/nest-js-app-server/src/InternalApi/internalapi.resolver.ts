import * as graphql from "@nestjs/graphql";
import { InternalApiService } from "./internalapi.service";

export class InternalApiResolver {
  constructor(protected readonly service: InternalApiService) {}
}
