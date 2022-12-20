import { Body, Controller,  Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notifcation-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {

  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recepientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recepientId
    })

    const raw = NotificationViewModel.toHTTP(notification);

    return {
      notification: raw
    };
  }
}
