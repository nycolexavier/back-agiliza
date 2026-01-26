import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedLogoMarca1769433194542 implements MigrationInterface {
    name = 'ModifiedLogoMarca1769433194542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" RENAME COLUMN "quantMax" TO "quantidadeMaxima"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deposito" RENAME COLUMN "quantidadeMaxima" TO "quantMax"`);
    }

}
