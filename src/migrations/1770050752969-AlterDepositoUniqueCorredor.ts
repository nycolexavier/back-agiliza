import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDepositoUniqueCorredor1770050752969 implements MigrationInterface {
    name = 'AlterDepositoUniqueCorredor1770050752969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" ADD CONSTRAINT "UQ_e5b810d293f0b9f665f79ff22d0" UNIQUE ("corredor")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" DROP CONSTRAINT "UQ_e5b810d293f0b9f665f79ff22d0"`);
    }

}
