import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovimentacoes1769170412099 implements MigrationInterface {
    name = 'CreateMovimentacoes1769170412099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "description" TO "email"`);
        await queryRunner.query(`CREATE TABLE "movimentacoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipo" character varying NOT NULL, "dataMovimentacao" date NOT NULL, "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1d0b888647c176e4c3d6905d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_tags_tags" ("usersId" uuid NOT NULL, "tagsId" uuid NOT NULL, CONSTRAINT "PK_3341c5e43f34ad2f7fb10d60480" PRIMARY KEY ("usersId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e36e86825bbc09e1fc9d3c83fb" ON "users_tags_tags" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9de46fe02d9d7488f92bedf417" ON "users_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users_tags_tags" ADD CONSTRAINT "FK_e36e86825bbc09e1fc9d3c83fb0" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_tags_tags" ADD CONSTRAINT "FK_9de46fe02d9d7488f92bedf4176" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_tags_tags" DROP CONSTRAINT "FK_9de46fe02d9d7488f92bedf4176"`);
        await queryRunner.query(`ALTER TABLE "users_tags_tags" DROP CONSTRAINT "FK_e36e86825bbc09e1fc9d3c83fb0"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9de46fe02d9d7488f92bedf417"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e36e86825bbc09e1fc9d3c83fb"`);
        await queryRunner.query(`DROP TABLE "users_tags_tags"`);
        await queryRunner.query(`DROP TABLE "movimentacoes"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "email" TO "description"`);
    }

}
