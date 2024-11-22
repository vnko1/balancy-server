import { FindManyOptions, FindOptionsWhere, Repository } from "typeorm";
import { AppService } from "../app/app.service";
import { CriteriaType, EntityType, InstanceInterface } from "./instance.types";

export abstract class InstanceService<T>
  extends AppService
  implements InstanceInterface<T>
{
  constructor(private readonly repository: Repository<T>) {
    super();
  }

  findAll(options?: FindManyOptions) {
    return this.repository.find(options);
  }

  findOne(where: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    return this.repository.findOneBy(where);
  }

  findAllAndCount(where: FindOptionsWhere<T> | FindOptionsWhere<T>[]) {
    return this.repository.findAndCountBy(where);
  }

  create(data: T) {
    return this.repository.create(data);
  }

  update(criteria: CriteriaType<T>, entity: EntityType<T>) {
    return this.repository.update(criteria, entity);
  }

  delete(criteria: CriteriaType<T>) {
    return this.repository.delete(criteria);
  }

  softDelete(criteria: CriteriaType<T>) {
    return this.repository.softDelete(criteria);
  }

  restore(criteria: CriteriaType<T>) {
    return this.repository.restore(criteria);
  }
}
