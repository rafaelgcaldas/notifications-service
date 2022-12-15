import { SendNotification } from "./send-notification"

describe("Send notification", () => {
  it("should to be able to send a notification", async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: "This is a notification",
      category: "social",
      recepientId: "example-recepient-id"
    });

    expect(notification).toBeTruthy();

  })
})