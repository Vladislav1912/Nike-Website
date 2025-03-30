import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'men' },
      { name: 'women' },
      { name: 'kids' },
      { name: 'unisex' },
    ],
  });

  await prisma.type.createMany({
    data: [
      { name: 'shoes' },
      { name: 't-shirt' },
      { name: 'pants' },
      { name: 'hoodies' },
      { name: 'jackets'},
    ],
  });

  await prisma.model.createMany({
    data: [
      { name: 'Nike Air Force' },
      { name: 'Nike DN8' },
      { name: 'Nike Alpha Trainer' },
      { name: 'Nike Air Max' },
      { name: 'Nike Dunk' },
      { name: 'Nike DN' },
      { name: 'Nike Blazer' },
    ],
  });

  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
