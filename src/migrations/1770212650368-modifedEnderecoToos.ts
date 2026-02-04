import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifedEnderecoToos1770212650368 implements MigrationInterface {
    name = 'ModifedEnderecoToos1770212650368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f9d001c622cc3ef97e59dee3171"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_f9d001c622cc3ef97e59dee3171"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "enderecoId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "enderecoId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_f9d001c622cc3ef97e59dee3171" UNIQUE ("enderecoId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f9d001c622cc3ef97e59dee3171" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
