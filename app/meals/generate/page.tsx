export const dynamic = "force-dynamic";

import prisma from '@/lib/prisma'

export default async function Home() {
  const meals = await prisma.meal.findMany({
    include: {
      ingredients: true,
    },
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <ol className="list-inside font-sans">
        {meals.map((meal) => (
          <li key={meal.id} className="mb-2">
            {meal.name}
            <ul className="list-inside ml-4">
              {meal.ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};
