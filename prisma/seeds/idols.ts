import { request } from 'undici';
import { TARGET } from './constant';
import { db } from '../db.server';

export async function async_idol() {
  console.log(`Start fetching data ...`);
  const { statusCode, headers, trailers, body } = await request(
    `${TARGET}/task/api/v1/idolManagement/idolList`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ pageNum: 1, pageSize: 200, languageType: 'zh' }),
    },
  );
  console.log('status:', statusCode);
  console.log('headers:', headers);
  console.log('trailers:', trailers);

  // 写入数据库
  console.log(`Start writing to the database`);

  const {
    data: { idolList },
  }: any = (await body.json()) || {};

  for (const p of idolList) {
    delete p.decodeName;
    delete p.decodeTeam;
    delete p.avatarPath;

    const { createdAt, updatedAt, height, ...others } = p;

    const insertData = {
      ...others,
      height: height ? parseInt(height) : null,
      createdAt: createdAt ? new Date(createdAt) : new Date(),
      updatedAt: updatedAt ? new Date(updatedAt) : new Date(),
    };

    const idol = await db.idols.upsert({
      where: { id: p.id },
      update: insertData,
      create: insertData,
    });

    console.log(`Created idol with id: ${idol.id}`);
  }

  console.log('Seeding finished.', idolList);
}
