import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacaoLoteComMarca1769446460351 implements MigrationInterface {
    name = 'RelacaoLoteComMarca1769446460351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "marca_id" uuid`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD CONSTRAINT "FK_9753fcbd1ab8e0ad038cbdbfcba" FOREIGN KEY ("marca_id") REFERENCES "marcas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP CONSTRAINT "FK_9753fcbd1ab8e0ad038cbdbfcba"`);
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "marca_id"`);
    }

}
