import * as fs from "fs";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./modules/user/user.entity";
import { UserModule } from "./modules/user/user.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT) || 3000,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(process.env.DATABASE_CA_CERT_PATH).toString(),
      },
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UsersModule,
  ],
})
export class AppModule {}
