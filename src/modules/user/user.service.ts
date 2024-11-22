import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InstanceService } from "src/common/services/instance/instance.service";
import { User } from "./user.entity";

@Injectable()
export class UserService extends InstanceService<User> {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {
    super(usersRepository);
  }
}
