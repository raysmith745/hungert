export const dynamic = "force-dynamic";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-sans">
        hungert
      </h1>
      <Link href="/meals/generate">
        <button className="bg-black border-white border-2 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
          Generate Meal Plan
        </button>
      </Link>
      <br></br>
      <Link href="/meals/new">
      <button className="bg-black border-white border-2 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
        Add New Meal
      </button>
      </Link>
    </div>
  );
};
