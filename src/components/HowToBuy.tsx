import Link from "next/link";

export default function HowToBuy() {
  return (
    <div className="bg-toby-darkbg py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-12">
          HOW TO BUY: FOLLOW LINKS BELOW
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Jupiter Exchange */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-white font-archivo text-xl mb-1">BUY TOBY</h3>
              <p className="text-gray-400 text-sm font-montserrat mb-3">
                Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump
              </p>
            </div>
            <Link
              href="https://jup.ag/swap/SOL-Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-6 rounded transition-colors"
            >
              Jupiter Exchange
            </Link>
          </div>

          {/* Raydium Exchange */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-white font-archivo text-xl mb-1">BUY TOBY</h3>
              <p className="text-gray-400 text-sm font-montserrat mb-3">
                Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump
              </p>
            </div>
            <Link
              href="https://raydium.io/swap/?inputMint=sol&outputMint=Hxh5JQY45Aas92Ag3KTeZfcxQf1hnD1ZpoMk5cKBpump"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-6 rounded transition-colors"
            >
              Raydium exchange
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
