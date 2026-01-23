import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedprecoCustoLote1769178314921 implements MigrationInterface {
    name = 'ModifiedprecoCustoLote1769178314921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "precocusto" TO "precoCusto"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "precoCusto" TO "precocusto"`);
    }

}
