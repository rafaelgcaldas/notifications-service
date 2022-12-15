import { Body, Controller,  Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notifcation-body';

@Controller('notifications')
export class NotificationsController {

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recepientId, category, content } = body;
  }
}
