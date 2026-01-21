/* eslint-disable */
import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddTagsIdToUsersTagsTable1769003241861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users-tags-tags', new TableColumn({
                    name: 'tagsId',
                    type: 'uuid',
                    isNullable: true,
                }))

                        await queryRunner.createForeignKey('users-tags-tags', new TableForeignKey({
                            name: 'users-tags-tags',
                            columnNames: [
                                'tagsId',
                            ],
                            referencedTableName: 'tags',
                            referencedColumnNames: ['id'],
                            onDelete: 'SET NULL',
                        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.dropForeignKey('users-tags-tags', 'users-tags-tags')


        await queryRunner.dropColumn('users-tags-tags', 'tagsId' )
    }

}
