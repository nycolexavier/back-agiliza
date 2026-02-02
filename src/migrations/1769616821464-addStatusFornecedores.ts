import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusFornecedores1769616821464 implements MigrationInterface {
    name = 'AddStatusFornecedores1769616821464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."fornecedores_status_enum" AS ENUM('ativo', 'inativo')`);
        await queryRunner.query(`ALTER TABLE "fornecedores" ADD "status" "public"."fornecedores_status_enum" NOT NULL DEFAULT 'ativo'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fornecedores" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."fornecedores_status_enum"`);
    }

}
