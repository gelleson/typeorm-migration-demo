import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventModule } from './p/event/event.module';
import ormconfig from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
