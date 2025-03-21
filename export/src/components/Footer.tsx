import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-toby-black py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-4">
            Copyright © 2025 TOBY TURTLE - ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <Link
              href="https://soundcloud.com/toby-the-turtle/toby-vibez"
              target="_blank"
              className="text-gray-400 hover:text-toby-green transition-colors text-sm"
            >
              SHELL SHOCKED
            </Link>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-xs">POWERED BY</p>
            {/* GoDaddy logo would go here */}
          </div>
        </div>

        {/* Cookie banner - simplified version */}
        <div className="mt-8 p-4 bg-black rounded-md">
          <p className="text-white text-sm font-medium mb-1">
            This website uses cookies.
          </p>
          <p className="text-gray-400 text-xs mb-3">
            We use cookies to analyze website traffic and optimize your website experience.
            By accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
          <button className="bg-toby-green text-black px-4 py-1 text-sm font-medium rounded">
            Accept
          </button>
        </div>
      </div>
    </footer>
  );
}
