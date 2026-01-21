/* eslint-disable */

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Tag } from './entities/tags.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users, Tag])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
