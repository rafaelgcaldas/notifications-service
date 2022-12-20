import { Module } from "@nestjs/common";
import { NotificationsRepository } from "@application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifcations-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [
    NotificationsRepository
  ]
})
export class DatabaseModule {}