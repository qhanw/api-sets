-- CreateTable
CREATE TABLE "idols" (
    "id" BIGSERIAL NOT NULL,
    "avatar" TEXT,
    "nickName" TEXT,
    "realName" TEXT,
    "englishName" TEXT,
    "height" INTEGER,
    "birthday" TEXT,
    "constellation" TEXT,
    "hobby" TEXT,
    "speciality" TEXT,
    "team" TEXT,
    "interactWeibo" TEXT,
    "interactXiaohongshu" TEXT,
    "remark1" TEXT,
    "remark2" TEXT,
    "videoLinks" TEXT,
    "videoNames" TEXT,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "idols_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "idols_id_key" ON "idols"("id");
