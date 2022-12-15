import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";


describe("Send notification", () => {
  it("should to be able to send a notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const {notification } = await sendNotification.execute({
      content: "This is a notification",
      category: "social",
      recepientId: "example-recepient-id"
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);

  })
})