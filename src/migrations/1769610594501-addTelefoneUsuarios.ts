import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTelefoneUsuarios1769610594501 implements MigrationInterface {
    name = 'AddTelefoneUsuarios1769610594501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "telefone" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telefone"`);
    }

}
