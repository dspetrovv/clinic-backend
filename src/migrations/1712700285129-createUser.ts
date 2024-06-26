import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUser1712700285129 implements MigrationInterface {
  name = 'createUser1712700285129';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "middleName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "roleId" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "lastUpdateDate" TIMESTAMP NOT NULL DEFAULT now(), "birthdate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
