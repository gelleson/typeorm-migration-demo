import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Event } from './src/app/p/event/event.entity';

console.log(join(__dirname, 'migrations/*.ts'))
export default {
  type: 'sqlite',
  database: 'database2.db',
  entities: [
    Event
  ],
  enableWAL: true,
  migrationsRun: true,
  logging: true,
  migrations: [],
  cli: {
    migrationsDir: 'apps/store/migrations'
  }
} as TypeOrmModuleOptions
