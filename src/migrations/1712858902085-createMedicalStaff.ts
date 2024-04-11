import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMedicalStaff1712858902085 implements MigrationInterface {
  name = 'createMedicalStaff1712858902085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "medical_staff" ("id" SERIAL NOT NULL, "phone" character varying NOT NULL, "userId" integer, "specialtyId" integer, "cabinetId" integer, CONSTRAINT "PK_518263f4f8d7f9cee9df278be36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
    await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" date`);
    await queryRunner.query(
      `ALTER TABLE "medical_staff" ADD CONSTRAINT "FK_d04dbf03bbcfd3191ec6c42982f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff" ADD CONSTRAINT "FK_79acb49a43769651f8da6c2a682" FOREIGN KEY ("specialtyId") REFERENCES "specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff" ADD CONSTRAINT "FK_464b8d40dbb9cbe5bed630a963b" FOREIGN KEY ("cabinetId") REFERENCES "cabinets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "medical_staff" DROP CONSTRAINT "FK_464b8d40dbb9cbe5bed630a963b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff" DROP CONSTRAINT "FK_79acb49a43769651f8da6c2a682"`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff" DROP CONSTRAINT "FK_d04dbf03bbcfd3191ec6c42982f"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "birthdate" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created"`);
    await queryRunner.query(`DROP TABLE "medical_staff"`);
  }
}
