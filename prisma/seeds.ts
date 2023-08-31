import { db } from './db.server';
import { async_idol } from './seeds/idols';

async function main() {
  await async_idol();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
