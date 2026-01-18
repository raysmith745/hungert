import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewMeal() {
  async function createMeal(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const ingredientsInput = formData.get("ingredients") as string;
    const category = formData.get("category") as string;

    // Validation
    if (!name.trim()) {
      throw new Error("Meal name is required");
    }
    if (!ingredientsInput.trim()) {
      throw new Error("At least one ingredient is required");
    }
    if (!category) {
      throw new Error("Please select a category");
    }

    await prisma.meal.create({
      data: {
        name: name.trim(),
        category,
        ingredients: {
          connectOrCreate: ingredientsInput
            .split(",")
            .map((ingredient) => {
              const trimmedName = ingredient.trim();
              return {
                where: { name: trimmedName },
                create: { name: trimmedName },
              };
            })
            .filter((item) => item.where.name),
        },
      },
    });

    revalidatePath("/meals");
    redirect("/");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Meal</h1>
      <Form action={createMeal} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your meal name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-lg mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="">Select a category</option>
            <option value="Weekday">Weekday</option>
            <option value="Weekend">Weekend</option>
            <option value="Meal Prep">Meal Prep</option>
          </select>
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-lg mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            placeholder="Write your meal ingredients here, separated by commas..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Meal
        </button>
      </Form>
    </div>
  );
}