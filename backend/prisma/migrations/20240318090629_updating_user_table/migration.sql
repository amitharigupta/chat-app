/*
  Warnings:

  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_user_id_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "is_active" SET DEFAULT true;

-- DropTable
DROP TABLE "News";
