import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLogin1770296477214 implements MigrationInterface {
    name = 'AddLogin1770296477214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "senha" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "senha"`);
    }

}
