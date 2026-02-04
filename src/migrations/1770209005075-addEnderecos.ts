import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEnderecos1770209005075 implements MigrationInterface {
    name = 'AddEnderecos1770209005075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(9) NOT NULL, "logradouro" character varying NOT NULL, "complemento" character varying, "bairro" character varying NOT NULL, "localidade" character varying NOT NULL, "uf" character varying(2) NOT NULL, "estado" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "enderecoId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_f9d001c622cc3ef97e59dee3171" UNIQUE ("enderecoId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f9d001c622cc3ef97e59dee3171" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f9d001c622cc3ef97e59dee3171"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_f9d001c622cc3ef97e59dee3171"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "enderecoId"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
    }

}
