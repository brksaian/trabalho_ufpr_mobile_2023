-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TV_Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "serieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TV_Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TV_Favorite" ("createdAt", "id", "serieId", "updatedAt", "userId") SELECT "createdAt", "id", "serieId", "updatedAt", "userId" FROM "TV_Favorite";
DROP TABLE "TV_Favorite";
ALTER TABLE "new_TV_Favorite" RENAME TO "TV_Favorite";
CREATE TABLE "new_TV_Next_to_Watch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "serieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TV_Next_to_Watch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TV_Next_to_Watch" ("createdAt", "id", "serieId", "updatedAt", "userId") SELECT "createdAt", "id", "serieId", "updatedAt", "userId" FROM "TV_Next_to_Watch";
DROP TABLE "TV_Next_to_Watch";
ALTER TABLE "new_TV_Next_to_Watch" RENAME TO "TV_Next_to_Watch";
CREATE TABLE "new_TV_Watched" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "serieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "TV_Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TV_Watched" ("createdAt", "id", "serieId", "updatedAt", "userId") SELECT "createdAt", "id", "serieId", "updatedAt", "userId" FROM "TV_Watched";
DROP TABLE "TV_Watched";
ALTER TABLE "new_TV_Watched" RENAME TO "TV_Watched";
CREATE TABLE "new_Movie_Next_to_Watch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Movie_Next_to_Watch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movie_Next_to_Watch" ("createdAt", "id", "movieId", "updatedAt", "userId") SELECT "createdAt", "id", "movieId", "updatedAt", "userId" FROM "Movie_Next_to_Watch";
DROP TABLE "Movie_Next_to_Watch";
ALTER TABLE "new_Movie_Next_to_Watch" RENAME TO "Movie_Next_to_Watch";
CREATE TABLE "new_Movie_Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Movie_Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movie_Favorite" ("createdAt", "id", "movieId", "updatedAt", "userId") SELECT "createdAt", "id", "movieId", "updatedAt", "userId" FROM "Movie_Favorite";
DROP TABLE "Movie_Favorite";
ALTER TABLE "new_Movie_Favorite" RENAME TO "Movie_Favorite";
CREATE TABLE "new_Movie_Watched" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Movie_Watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movie_Watched" ("createdAt", "id", "movieId", "updatedAt", "userId") SELECT "createdAt", "id", "movieId", "updatedAt", "userId" FROM "Movie_Watched";
DROP TABLE "Movie_Watched";
ALTER TABLE "new_Movie_Watched" RENAME TO "Movie_Watched";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
