import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterDepositoTemProduto1770050203081 implements MigrationInterface {
    name = 'AlterDepositoTemProduto1770050203081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" RENAME COLUMN "quantidadeMaxima" TO "temProduto"`);
        await queryRunner.query(`ALTER TABLE "deposito" DROP COLUMN "temProduto"`);
        await queryRunner.query(`ALTER TABLE "deposito" ADD "temProduto" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" DROP COLUMN "temProduto"`);
        await queryRunner.query(`ALTER TABLE "deposito" ADD "temProduto" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "deposito" RENAME COLUMN "temProduto" TO "quantidadeMaxima"`);
    }

}
