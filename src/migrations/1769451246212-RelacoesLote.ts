import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacoesLote1769451246212 implements MigrationInterface {
    name = 'RelacoesLote1769451246212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "produto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "deposito_id" uuid`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "fornecedor_id" uuid`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD CONSTRAINT "UQ_5ee9bb385014f1635b709c15077" UNIQUE ("nome")`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD CONSTRAINT "FK_eef2ee08cd99806daac0abde204" FOREIGN KEY ("produto_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD CONSTRAINT "FK_2a64d98247ec45ba1e11f2230d7" FOREIGN KEY ("deposito_id") REFERENCES "deposito"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD CONSTRAINT "FK_0d294ec53f608b648b87bd77ea8" FOREIGN KEY ("fornecedor_id") REFERENCES "fornecedores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP CONSTRAINT "FK_0d294ec53f608b648b87bd77ea8"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP CONSTRAINT "FK_2a64d98247ec45ba1e11f2230d7"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP CONSTRAINT "FK_eef2ee08cd99806daac0abde204"`);
        await queryRunner.query(`ALTER TABLE "marcas" DROP CONSTRAINT "UQ_5ee9bb385014f1635b709c15077"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "fornecedor_id"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "deposito_id"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "produto_id"`);
    }

}
