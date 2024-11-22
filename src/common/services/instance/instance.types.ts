import {
  DeleteResult,
  FindManyOptions,
  FindOptionsWhere,
  ObjectId,
  UpdateResult,
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export type CriteriaType<T> =
  | string
  | number
  | Date
  | ObjectId
  | FindOptionsWhere<T>
  | string[]
  | number[]
  | Date[]
  | ObjectId[];

export type EntityType<T> = QueryDeepPartialEntity<T>;

export interface InstanceInterface<T> {
  findOne(opt: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;

  findAll(opt?: FindManyOptions): Promise<T[]>;

  findAllAndCount(
    where: FindOptionsWhere<T> | FindOptionsWhere<T>[]
  ): Promise<[T[], number]>;

  create(data: T): T;

  update(
    criteria: CriteriaType<T>,
    entity: EntityType<T>
  ): Promise<UpdateResult>;

  delete(criteria: CriteriaType<T>): Promise<DeleteResult>;

  softDelete(criteria: CriteriaType<T>): Promise<DeleteResult>;

  restore(criteria: CriteriaType<T>): Promise<UpdateResult>;
}
