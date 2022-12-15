import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notications.controller';

@Module({
  imports: [],
  controllers: [
    NotificationsController
  ]
})

export class HttpModule {}