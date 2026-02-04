import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedUFEndereco1770226146723 implements MigrationInterface {
    name = 'RemovedUFEndereco1770226146723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "uf"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "uf" character varying(2) NOT NULL`);
    }

}
