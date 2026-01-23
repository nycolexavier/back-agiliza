import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedQuantidadeLote1769178493780 implements MigrationInterface {
    name = 'ModifiedQuantidadeLote1769178493780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "quanitdade" TO "quantidade"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Lotes" RENAME COLUMN "quantidade" TO "quanitdade"`);
    }

}
