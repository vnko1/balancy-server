import { FindManyOptions, FindOptionsWhere, Repository } from "typeorm";
import { AppService } from "../app/app.service";
import { InstanceInterface } from "./instance.interface";

export abstract class InstanceService<T>
  extends AppService
  implements InstanceInterface<T>
{
  constructor(private readonly repository: Repository<T>) {
    super();
  }

  findAll(opt?: FindManyOptions) {
    return this.repository.find(opt);
  }

  findOne(opt: FindOptionsWhere<T>) {
    return this.repository.findOneBy(opt);
  }

  //   findOne() {}
}

// import { AppService } from '../app/app.service';

// import { InstanceInterface } from './instance.interface';

// export abstract class InstanceService<TModel extends Model>
//   extends AppService
//   implements InstanceInterface<TModel>
// {
//   constructor(private readonly model: ModelStatic<TModel>) {
//     super();
//   }

//   add(data: any, opt?: CreateOptions): Promise<TModel> {
//     return this.model.create(data, opt);
//   }

//   edit<T extends object>(
//     data: T,
//     opt: UpdateOptions,
//   ): Promise<[affectedCount: number]> {
//     return this.model.update(data, opt);
//   }

//   delete(opt: DestroyOptions): Promise<number> {
//     return this.model.destroy(opt);
//   }

//   findByPk<M extends string | number>(
//     pk: M,
//     opt?: FindOptions,
//   ): Promise<TModel> {
//     return this.model.findByPk(pk, opt);
//   }

//   findOne(opt?: FindOptions): Promise<TModel> {
//     return this.model.findOne(opt);
//   }

//   findAll(opt?: FindOptions): Promise<TModel[]> {
//     return this.model.findAll(opt);
//   }

//   findAndCountAll(
//     opt?: Omit<FindAndCountOptions<any>, 'group'>,
//   ): Promise<{ rows: TModel[]; count: number }> {
//     return this.model.findAndCountAll(opt);
//   }
// }
