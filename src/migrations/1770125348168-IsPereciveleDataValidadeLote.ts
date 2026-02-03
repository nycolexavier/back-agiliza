import { MigrationInterface, QueryRunner } from "typeorm";

export class IsPereciveleDataValidadeLote1770125348168 implements MigrationInterface {
    name = 'IsPereciveleDataValidadeLote1770125348168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "dataValidade"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "dataValidade" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "dataValidade"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "dataValidade" TIMESTAMP NOT NULL`);
    }

}
