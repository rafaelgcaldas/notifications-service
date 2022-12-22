import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notification-repository";


export class InMemoryNotificationsRepository implements NotificationsRepository {
  
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      item => item.id === notificationId
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationindex = this.notifications.findIndex(
      item => item.id === notification.id
    )

    if (notificationindex >= 0) {
      this.notifications[notificationindex] = notification;
    }
  }
}