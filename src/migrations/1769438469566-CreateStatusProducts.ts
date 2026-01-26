import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStatusProducts1769438469566 implements MigrationInterface {
    name = 'CreateStatusProducts1769438469566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."products_status_enum" AS ENUM('ativo', 'inativo')`);
        await queryRunner.query(`ALTER TABLE "products" ADD "status" "public"."products_status_enum" NOT NULL DEFAULT 'ativo'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."products_status_enum"`);
    }

}
