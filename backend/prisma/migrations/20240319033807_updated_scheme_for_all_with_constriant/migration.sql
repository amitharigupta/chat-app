/*
  Warnings:

  - You are about to drop the column `chatsId` on the `Members` table. All the data in the column will be lost.
  - You are about to drop the column `membersId` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `member_id` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Members" DROP CONSTRAINT "Members_chatsId_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_membersId_fkey";

-- AlterTable
ALTER TABLE "Chats" ADD COLUMN     "member_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Members" DROP COLUMN "chatsId",
ALTER COLUMN "public_id" DROP NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "membersId",
ADD COLUMN     "members_id" TEXT;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_members_id_fkey" FOREIGN KEY ("members_id") REFERENCES "Members"("id") ON DELETE SET NULL ON UPDATE CASCADE;
