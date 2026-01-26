import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedLogoMarca1769432390967 implements MigrationInterface {
    name = 'ModifiedLogoMarca1769432390967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "logo" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "marcas" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "marcas" ADD "logo" character varying(255) NOT NULL`);
    }

}
