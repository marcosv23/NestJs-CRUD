import { Module } from '@nestjs/common';
import {SequelizeGeneralModule} from './database/config/sequelizeGeneralModule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/modules/tasks.module';
//import {DatabaseModule} from './database/database.module';

@Module({
  imports: [ TasksModule,SequelizeGeneralModule],
  controllers: [AppController ],
  providers: [AppService,],
})
export class AppModule {}
