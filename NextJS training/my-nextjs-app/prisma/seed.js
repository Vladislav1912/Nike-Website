import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Men' },
      { name: 'Women' },
      { name: 'Kids' },
      { name: 'Unisex' },
    ],
  });

  await prisma.type.createMany({
    data: [
      { name: 'Shoes' },
      { name: 'T-shirt' },
      { name: 'Pants' },
      { name: 'Hoodies' },
      { name: 'Jackets'},
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
