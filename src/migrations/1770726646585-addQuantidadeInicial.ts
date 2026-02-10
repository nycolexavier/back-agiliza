import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddQuantidadeInicial1770726646585
  implements MigrationInterface
{
  name = 'AddQuantidadeInicial1770726646585';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "Lotes"
      ADD "quantidadeInicial" numeric NOT NULL DEFAULT 0
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "Lotes" DROP COLUMN "quantidadeInicial"
    `);
  }
}
