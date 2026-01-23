import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedTypesLote1769178670961 implements MigrationInterface {
    name = 'ModifiedTypesLote1769178670961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "precoCusto"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "precoCusto" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "precoVenda"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "precoVenda" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "quantidade" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "quantidade"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "quantidade" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "precoVenda"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "precoVenda" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "precoCusto"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "precoCusto" numeric NOT NULL`);
    }

}
