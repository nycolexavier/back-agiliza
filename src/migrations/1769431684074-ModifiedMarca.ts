import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedMarca1769431684074 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Adiciona a coluna como nullable
        await queryRunner.query(
            `ALTER TABLE "marcas" ADD "logo" character varying(255)`
        );
        
        // Define um valor padrão para registros existentes
        await queryRunner.query(
            `UPDATE "marcas" SET "logo" = '' WHERE "logo" IS NULL`
        );
        
        // Agora torna a coluna NOT NULL
        await queryRunner.query(
            `ALTER TABLE "marcas" ALTER COLUMN "logo" SET NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "marcas" DROP COLUMN "logo"`
        );
    }
}