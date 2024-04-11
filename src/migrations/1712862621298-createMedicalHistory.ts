import { MigrationInterface, QueryRunner } from 'typeorm';

export class createMedicalHistory1712862621298 implements MigrationInterface {
  name = 'createMedicalHistory1712862621298';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "medical_history" ("id" SERIAL NOT NULL, "diagnosis" character varying NOT NULL, "treatmentPlan" text NOT NULL, "visitDate" TIMESTAMP NOT NULL, "patientId" integer, CONSTRAINT "PK_b74f21cb30300ddf41a00623568" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "patients_medical_staff_medical_staff" ("patientsId" integer NOT NULL, "medicalStaffId" integer NOT NULL, CONSTRAINT "PK_14524593672f409d2cf0fb7b023" PRIMARY KEY ("patientsId", "medicalStaffId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8a81a03695063c2c04d93f1d91" ON "patients_medical_staff_medical_staff" ("patientsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f522ab900f31f3bd68da9143be" ON "patients_medical_staff_medical_staff" ("medicalStaffId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "medical_staff_patients_patients" ("medicalStaffId" integer NOT NULL, "patientsId" integer NOT NULL, CONSTRAINT "PK_5397674d80854b51f9210870169" PRIMARY KEY ("medicalStaffId", "patientsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4c6f46dc5d7fb5c277e0ca1294" ON "medical_staff_patients_patients" ("medicalStaffId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6b7ae950c92e5412c844ea6b4a" ON "medical_staff_patients_patients" ("patientsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_history" ADD CONSTRAINT "FK_812de45a50f522f77ee0a17652f" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "patients_medical_staff_medical_staff" ADD CONSTRAINT "FK_8a81a03695063c2c04d93f1d91f" FOREIGN KEY ("patientsId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "patients_medical_staff_medical_staff" ADD CONSTRAINT "FK_f522ab900f31f3bd68da9143bec" FOREIGN KEY ("medicalStaffId") REFERENCES "medical_staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff_patients_patients" ADD CONSTRAINT "FK_4c6f46dc5d7fb5c277e0ca12948" FOREIGN KEY ("medicalStaffId") REFERENCES "medical_staff"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff_patients_patients" ADD CONSTRAINT "FK_6b7ae950c92e5412c844ea6b4a6" FOREIGN KEY ("patientsId") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "medical_staff_patients_patients" DROP CONSTRAINT "FK_6b7ae950c92e5412c844ea6b4a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_staff_patients_patients" DROP CONSTRAINT "FK_4c6f46dc5d7fb5c277e0ca12948"`,
    );
    await queryRunner.query(
      `ALTER TABLE "patients_medical_staff_medical_staff" DROP CONSTRAINT "FK_f522ab900f31f3bd68da9143bec"`,
    );
    await queryRunner.query(
      `ALTER TABLE "patients_medical_staff_medical_staff" DROP CONSTRAINT "FK_8a81a03695063c2c04d93f1d91f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_history" DROP CONSTRAINT "FK_812de45a50f522f77ee0a17652f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6b7ae950c92e5412c844ea6b4a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4c6f46dc5d7fb5c277e0ca1294"`,
    );
    await queryRunner.query(`DROP TABLE "medical_staff_patients_patients"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f522ab900f31f3bd68da9143be"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_8a81a03695063c2c04d93f1d91"`,
    );
    await queryRunner.query(
      `DROP TABLE "patients_medical_staff_medical_staff"`,
    );
    await queryRunner.query(`DROP TABLE "medical_history"`);
  }
}
