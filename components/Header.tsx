  import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-black">
      <Link href="/">
        <p><strong>hungert</strong></p>
      </Link>
      <nav>
        <ul className="flex flex-row space-x-4 ml-4 text-xs sm:text-base">
          <li className="flex items-center">
            <Link href="/" className="hover:text-gray-500">Home</Link>
          </li>
          <li className="flex items-center border-l border-gray-500 pl-4">
            <Link href="/meals/generate" className="hover:text-gray-500">Generate Meal Plan</Link>
          </li>
          <li className="flex items-center border-l border-gray-500 pl-4">
            <Link href="/meals/new" className="hover:text-gray-500">Add New Meal</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
