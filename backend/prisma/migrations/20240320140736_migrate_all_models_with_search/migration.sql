/*
  Warnings:

  - You are about to drop the column `member_id` on the `Chats` table. All the data in the column will be lost.
  - You are about to drop the `Members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_member_id_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_members_id_fkey";

-- AlterTable
ALTER TABLE "Chats" DROP COLUMN "member_id",
ADD COLUMN     "usersId" TEXT;

-- DropTable
DROP TABLE "Members";

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
