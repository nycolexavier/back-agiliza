import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeposito1769191192871 implements MigrationInterface {
    name = 'CreateDeposito1769191192871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "deposito" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "corredor" character varying(20) NOT NULL, "prateleira" character varying(20) NOT NULL, "sessao" character varying(20) NOT NULL, "quantMax" character varying NOT NULL, "criadoEm" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_6b3dfe64ef12ee03ff8cab435f3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "deposito"`);
    }

}
