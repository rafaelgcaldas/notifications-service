import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = []

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  }
}

describe("Send notification", () => {
  it("should to be able to send a notification", async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: "This is a notification",
      category: "social",
      recepientId: "example-recepient-id"
    });

    expect(notifications).toHaveLength(1);

  })
})