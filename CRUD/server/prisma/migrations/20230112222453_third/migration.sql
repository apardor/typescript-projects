/*
  Warnings:

  - A unique constraint covering the columns `[id,ownedById]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pet_id_ownedById_key" ON "Pet"("id", "ownedById");
