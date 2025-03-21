import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-toby-black py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-toby-yellow font-archivo text-5xl md:text-6xl mb-6">
            MEET $TOBY
          </h1>
          
          <div className="mb-8">
            <Image
              src="/og-image.jpg"
              alt="Toby the Turtle"
              width={400}
              height={400}
              className="h-auto"
            />
          </div>
          
          <p className="text-white font-montserrat uppercase leading-relaxed mb-8 max-w-3xl">
            IN A HIGHLY ROTATIONAL PVP ENVIRONMENT FILLED WITH PUMPS AND DUMPS, TOBY IS A CULTURE COIN, COMMITTED TO SEEING TOBY LIVE A LONG AND PROSPEROUS LIFE WITH ALL HIS FANS.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Link
              href="https://t.me/tobyportalxyz"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-8 rounded transition-colors uppercase"
            >
              — TELEGRAM —
            </Link>
            <Link
              href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu"
              target="_blank"
              className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-8 rounded transition-colors uppercase"
            >
              — DEXSCREENER —
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
