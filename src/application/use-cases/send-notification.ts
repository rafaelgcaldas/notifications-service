import { Notification } from "../entities/notifications";

interface SendNotificationRequest {
  recepientId: string;
  content: string;
  category: string;
}

export class SendNotification {
  async execute(request: SendNotificationRequest): Promise<Notification> {
    const { recepientId, content, category } = request;

    const notification = new Notification({
      recepientId,
      content,
      
    })
  }
}