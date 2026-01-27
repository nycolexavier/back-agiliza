import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacaoMovimentacao1769517988874 implements MigrationInterface {
    name = 'RelacaoMovimentacao1769517988874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movimentacoes" ADD "quantidade" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movimentacoes" ADD "lote_id" uuid`);
        await queryRunner.query(`ALTER TABLE "movimentacoes" ADD CONSTRAINT "FK_c184e1e8db78951b24dbbd60ddd" FOREIGN KEY ("lote_id") REFERENCES "Lotes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movimentacoes" DROP CONSTRAINT "FK_c184e1e8db78951b24dbbd60ddd"`);
        await queryRunner.query(`ALTER TABLE "movimentacoes" DROP COLUMN "lote_id"`);
        await queryRunner.query(`ALTER TABLE "movimentacoes" DROP COLUMN "quantidade"`);
    }

}
