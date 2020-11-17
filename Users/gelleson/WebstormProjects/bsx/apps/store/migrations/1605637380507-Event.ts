import {MigrationInterface, QueryRunner} from "typeorm";

export class Event1605637380507 implements MigrationInterface {
    name = 'Event1605637380507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wow" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "event" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wow"`);
    }

}
