import { MigrationInterface, QueryRunner } from "typeorm";

export class UniqueNomeProduto1769447554463 implements MigrationInterface {
    name = 'UniqueNomeProduto1769447554463'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "UQ_a7c7f3b40cebc4ecfd6b5a29a4e" UNIQUE ("nome")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "UQ_a7c7f3b40cebc4ecfd6b5a29a4e"`);
    }

}
