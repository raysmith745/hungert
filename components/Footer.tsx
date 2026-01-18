import { FaLinkedin, FaGithub } from "react-icons/fa"

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-4 border-t-2 bg-black mt-auto">
      <div className="flex items-center ml-4">
        <a
          href="https://github.com/raysmith745"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:text-gray-500"
        >
          <FaGithub className="text-white text-3xl hover:text-gray-500" />
        </a>
        <div className="flex items-center border-l border-gray-500 h-6 mx-4"></div>
        <a
          href="https://www.linkedin.com/in/ray-smith-23ab02bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:text-gray-500"
        >
          <FaLinkedin className="text-white text-3xl hover:text-gray-500" />
        </a>
      </div>
      <div className="text-right flex text-xs sm:text-base">
        <p className="text-white">© Ray Westsmith {currentYear}</p>
      </div>
    </footer>
  )
}
