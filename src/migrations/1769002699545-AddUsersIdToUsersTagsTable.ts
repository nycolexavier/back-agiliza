/* eslint-disable */
import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUsersIdToUsersTagsTable1769002699545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users-tags-tags', new TableColumn({
            name: 'usersId',
            type: 'uuid',
            isNullable: true,
        }))

        await queryRunner.createForeignKey('users-tags-tags', new TableForeignKey({
            name: 'users-tags-users',
            columnNames: [
                'usersId',
            ],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users-tags-tags', 'users-tags-users')


        await queryRunner.dropColumn('users-tags-tags', 'usersId' )
    }

}
