import { Injectable } from "@nestjs/common";
import { AppService } from "src/common/services";
import { UserService } from "../user/user.service";

@Injectable()
export class UsersService extends AppService {
  constructor(private readonly userService: UserService) {
    super();
  }
}
