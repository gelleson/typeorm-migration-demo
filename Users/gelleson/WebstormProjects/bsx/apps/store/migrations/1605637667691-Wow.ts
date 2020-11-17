import {MigrationInterface, QueryRunner} from "typeorm";

export class Wow1605637667691 implements MigrationInterface {
    name = 'Wow1605637667691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wow" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "event" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wow"`);
    }

}
