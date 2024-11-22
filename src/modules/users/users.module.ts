import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { UsersService } from "./users.service";

@Module({
  imports: [UserModule],
  providers: [UsersService],
  controllers: [],
  exports: [],
})
export class UsersModule {}
