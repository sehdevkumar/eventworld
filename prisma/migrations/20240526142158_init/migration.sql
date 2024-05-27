-- CreateTable
CREATE TABLE "CreateEvents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "event" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "CreateEvents_event_idx" ON "CreateEvents"("event");
