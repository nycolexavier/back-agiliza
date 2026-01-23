import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedTypesCodigloLote1769181344785 implements MigrationInterface {
    name = 'ModifiedTypesCodigloLote1769181344785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "codigolote"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "codigolote" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "codigolote"`);
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "codigolote" character varying NOT NULL`);
    }

}
