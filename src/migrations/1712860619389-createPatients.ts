import { MigrationInterface, QueryRunner } from 'typeorm';

export class createPatients1712860619389 implements MigrationInterface {
  name = 'createPatients1712860619389';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "patients" ("id" SERIAL NOT NULL, "birthday" date, "address" character varying, "phone" character varying, "passport" character varying, "userId" integer, CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "patients" ADD CONSTRAINT "FK_2c24c3490a26d04b0d70f92057a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "patients" DROP CONSTRAINT "FK_2c24c3490a26d04b0d70f92057a"`,
    );
    await queryRunner.query(`DROP TABLE "patients"`);
  }
}
