import {MigrationInterface, QueryRunner} from "typeorm";

export class wow1605642798084 implements MigrationInterface {
    name = 'wow1605642798084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wow" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "event" integer NOT NULL DEFAULT (1), "event2" integer NOT NULL DEFAULT (1))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wow"`);
    }

}