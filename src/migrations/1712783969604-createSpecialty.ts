import { MigrationInterface, QueryRunner } from 'typeorm';

export class createSpecialty1712783969604 implements MigrationInterface {
  name = 'createSpecialty1712783969604';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cabinets" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_bc7cc7e3c814364dbdde3d3be6c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "specialties" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "specialties"`);
    await queryRunner.query(`DROP TABLE "cabinets"`);
  }
}
