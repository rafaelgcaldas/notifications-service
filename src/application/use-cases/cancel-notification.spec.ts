import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";


describe("Cancel notification", () => {
  it("should to be able to cancel a notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: "social",
      content: new Content("Nova solicitação de amizade"),
      recepientId: "example-recepient-id"
    })

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notficationId: notification.id
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date)
    );
  })

  it("should not be able to cancel a non existing a notification", async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notficationId: "fake-notification-id"
      });
    }).rejects.toThrow(NotificationNotFound);
  })
})