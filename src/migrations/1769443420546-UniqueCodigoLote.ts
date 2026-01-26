import { MigrationInterface, QueryRunner } from "typeorm";

export class UniqueCodigoLote1769443420546 implements MigrationInterface {
    name = 'UniqueCodigoLote1769443420546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" ADD CONSTRAINT "UQ_e1d4fd929d06137272535402599" UNIQUE ("codigoLote")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP CONSTRAINT "UQ_e1d4fd929d06137272535402599"`);
    }

}
