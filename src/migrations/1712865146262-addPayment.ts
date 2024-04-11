import {MigrationInterface, QueryRunner} from "typeorm";

export class addPayment1712865146262 implements MigrationInterface {
    name = 'addPayment1712865146262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medical_history" ADD "payment" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medical_history" DROP COLUMN "payment"`);
    }

}
