import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTables1712864385017 implements MigrationInterface {
  name = 'changeTables1712864385017';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cabinets" DROP COLUMN "description"`);
    await queryRunner.query(
      `ALTER TABLE "cabinets" ADD "description" text NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "roles" ADD "description" text`);
    await queryRunner.query(
      `ALTER TABLE "specialties" DROP COLUMN "description"`,
    );
    await queryRunner.query(`ALTER TABLE "specialties" ADD "description" text`);
    await queryRunner.query(
      `ALTER TABLE "medical_history" ALTER COLUMN "treatmentPlan" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "medical_history" ALTER COLUMN "treatmentPlan" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "specialties" DROP COLUMN "description"`,
    );
    await queryRunner.query(
      `ALTER TABLE "specialties" ADD "description" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "description"`);
    await queryRunner.query(
      `ALTER TABLE "roles" ADD "description" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "cabinets" DROP COLUMN "description"`);
    await queryRunner.query(
      `ALTER TABLE "cabinets" ADD "description" character varying NOT NULL`,
    );
  }
}
