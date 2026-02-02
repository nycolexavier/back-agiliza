import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTelefoneEmailFornecedor1769618276705 implements MigrationInterface {
    name = 'AddTelefoneEmailFornecedor1769618276705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fornecedores" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "fornecedores" ADD "telefone" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fornecedores" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "fornecedores" DROP COLUMN "email"`);
    }

}
