/*
  Warnings:

  - You are about to alter the column `name` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);
