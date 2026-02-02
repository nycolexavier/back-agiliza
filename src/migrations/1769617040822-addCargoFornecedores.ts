import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCargoFornecedores1769617040822 implements MigrationInterface {
    name = 'AddCargoFornecedores1769617040822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."fornecedores_cargo_enum" AS ENUM('admin', 'gerente', 'funcionario', 'fornecedor')`);
        await queryRunner.query(`ALTER TABLE "fornecedores" ADD "cargo" "public"."fornecedores_cargo_enum" NOT NULL DEFAULT 'fornecedor'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fornecedores" DROP COLUMN "cargo"`);
        await queryRunner.query(`DROP TYPE "public"."fornecedores_cargo_enum"`);
    }

}
