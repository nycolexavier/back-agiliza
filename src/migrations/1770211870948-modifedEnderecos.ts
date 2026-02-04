import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifedEnderecos1770211870948 implements MigrationInterface {
    name = 'ModifedEnderecos1770211870948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "usuarioId" uuid`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_3fda1857bc40b2c12b9562101ac" FOREIGN KEY ("usuarioId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_3fda1857bc40b2c12b9562101ac"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "usuarioId"`);
    }

}
