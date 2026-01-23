import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedTypesCodigloLote1769181957642 implements MigrationInterface {
    name = 'ModifiedTypesCodigloLote1769181957642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "codigolote" TO "codigoLote"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "codigoLote" TO "codigolote"`);
    }

}
