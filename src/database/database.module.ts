/* eslint-disable */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/users/entities/tags.entity';
import { Users } from 'src/users/entities/users.entity';
import {DataSourceOptions} from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5435,
    username: 'postgres',
    password: 'cacoal123',
    database: 'devtraining',
    entities: [Users, Tag],
    synchronize: false,
}


@Module({
    imports: [TypeOrmModule.forRoot(dataSourceOptions)
],

})
export class DatabaseModule {}
