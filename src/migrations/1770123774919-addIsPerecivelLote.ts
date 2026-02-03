import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsPerecivelLote1770123774919 implements MigrationInterface {
    name = 'AddIsPerecivelLote1770123774919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" ADD "isPerecivel" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" DROP COLUMN "isPerecivel"`);
    }

}
