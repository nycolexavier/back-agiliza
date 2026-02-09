import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategoria1770657734160 implements MigrationInterface {
    name = 'AddCategoria1770657734160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "categoria_id" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_71ece0294a9224f05c1a262da08" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_71ece0294a9224f05c1a262da08"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoria_id"`);
    }

}
