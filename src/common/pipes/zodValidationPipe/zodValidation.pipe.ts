import {
  PipeTransform,
  BadRequestException,
  ArgumentMetadata,
} from "@nestjs/common";
import { ZodSchema } from "zod";

export class BodyValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      if (metadata.type === "body") return this.schema.parse(value);

      return value;
    } catch (error) {
      throw new BadRequestException(error?.issues[0]?.message);
    }
  }
}
