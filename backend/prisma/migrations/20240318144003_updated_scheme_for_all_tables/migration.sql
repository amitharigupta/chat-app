/*
  Warnings:

  - The primary key for the `Attachments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Members` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Messages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_chatsId_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_attachment_id_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_chat_id_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_membersId_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_reciever_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_sender_user_id_fkey";

-- AlterTable
ALTER TABLE "Attachments" DROP CONSTRAINT "Attachments_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "updated_at" DROP DEFAULT,
ADD CONSTRAINT "Attachments_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Attachments_id_seq";

-- AlterTable
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "updated_at" DROP DEFAULT,
ADD CONSTRAINT "Chats_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chats_id_seq";

-- AlterTable
ALTER TABLE "Members" DROP CONSTRAINT "Members_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "chatsId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Members_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Members_id_seq";

-- AlterTable
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "chat_id" SET DATA TYPE TEXT,
ALTER COLUMN "attachment_id" SET DATA TYPE TEXT,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "membersId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Messages_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Messages_id_seq";

-- AlterTable
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "sender_user_id" SET DATA TYPE TEXT,
ALTER COLUMN "reciever_user_id" SET DATA TYPE TEXT,
ALTER COLUMN "is_active" SET DEFAULT true,
ALTER COLUMN "updated_at" DROP DEFAULT,
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Request_id_seq";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" DROP DEFAULT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Users_id_seq";

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_chatsId_fkey" FOREIGN KEY ("chatsId") REFERENCES "Chats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_attachment_id_fkey" FOREIGN KEY ("attachment_id") REFERENCES "Attachments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_membersId_fkey" FOREIGN KEY ("membersId") REFERENCES "Members"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_sender_user_id_fkey" FOREIGN KEY ("sender_user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_reciever_user_id_fkey" FOREIGN KEY ("reciever_user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
