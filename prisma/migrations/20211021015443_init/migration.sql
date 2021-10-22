-- CreateEnum
CREATE TYPE "visualizationType" AS ENUM ('public', 'subscribed_only', 'guests_only');

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "sinopsis" TEXT NOT NULL,
    "visualization" "visualizationType" NOT NULL DEFAULT E'public',
    "slug" TEXT NOT NULL,
    "is_featured" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
