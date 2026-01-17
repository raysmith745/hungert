import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const salmon = await prisma.ingredient.create({
    data: { name: 'Salmon' },
  });

  const tenderstemBroccoli = await prisma.ingredient.create({
    data: { name: 'Tenderstem Broccoli' },
  });

  const sweetPotato = await prisma.ingredient.create({
    data: { name: 'Sweet Potato' },
  });

  await prisma.meal.create({
    data: {
      name: "Salmon, Broccoli, Sweet Potato Mash",
      category: "Weekday",
      ingredients: {
        connect: [
          { id: salmon.id },
          { id: tenderstemBroccoli.id },
          { id: sweetPotato.id },
        ]
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
