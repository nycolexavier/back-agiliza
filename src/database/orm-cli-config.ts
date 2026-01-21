/* eslint-disable */
import { CreateUsersTagsTable1768998970895 } from "src/migrations/1768998970895-CreateUsersTagsTable";
import { dataSourceOptions } from "./database.module";
import {DataSource} from 'typeorm'
import { CreateTagsTable1769000996500 } from "src/migrations/1769000996500-CreateTagsTable";
import { CreateUsersTagTable1769002265417 } from "src/migrations/1769002265417-CreateUsersTagTable";
import { AddUsersIdToUsersTagsTable1769002699545 } from "src/migrations/1769002699545-AddUsersIdToUsersTagsTable";
import { AddTagsIdToUsersTagsTable1769003241861 } from "src/migrations/1769003241861-AddTagsIdToUsersTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateUsersTagsTable1768998970895, CreateTagsTable1769000996500, CreateUsersTagTable1769002265417, AddUsersIdToUsersTagsTable1769002699545, AddTagsIdToUsersTagsTable1769003241861]
})