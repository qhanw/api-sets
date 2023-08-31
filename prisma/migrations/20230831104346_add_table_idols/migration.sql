-- CreateTable
CREATE TABLE "idols" (
    "id" BIGSERIAL NOT NULL,
    "realName" TEXT,
    "englishName" TEXT,
    "nickName" TEXT,
    "avatar" TEXT,
    "height" INTEGER,
    "birthday" TEXT,
    "constellation" TEXT,
    "hobby" TEXT,
    "speciality" TEXT,
    "team" TEXT,
    "interactWeibo" TEXT,
    "interactXiaohongshu" TEXT,
    "videoNames" TEXT,
    "videoLinks" TEXT,
    "remark1" TEXT,
    "remark2" TEXT,
    "createdAt" TIMESTAMPTZ(6),
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "idols_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "idols_id_key" ON "idols"("id");
