import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDepositoo1770050520325 implements MigrationInterface {
    name = 'AlterDepositoo1770050520325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" DROP COLUMN "prateleira"`);
        await queryRunner.query(`ALTER TABLE "deposito" DROP COLUMN "sessao"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" ADD "sessao" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "deposito" ADD "prateleira" character varying(20) NOT NULL`);
    }

}
