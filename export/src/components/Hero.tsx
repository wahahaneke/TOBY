import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-toby-black py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-toby-yellow font-archivo text-4xl md:text-5xl mb-6">
              MEET $TOBY
            </h1>
            <p className="text-white font-montserrat uppercase leading-relaxed mb-2">
              IN A HIGHLY ROTATIONAL PVP ENVIRONMENT FILLED WITH PUMPS AND DUMPS, TOBY IS A DIFFERENT COIN, COMMITTED TO SEEING TOBY LIVE A LONG AND PROSPEROUS LIFE WITH ALL HIS FANS.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <img
              src="https://ext.same-assets.com/3474497953/3214871254.jpeg"
              alt="Toby the Turtle"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="https://t.me/tobyportalxyz"
            target="_blank"
            className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-6 rounded transition-colors"
          >
            TELEGRAM
          </Link>
          <Link
            href="https://dexscreener.com/solana/8bjikkzel672yumyoznuda66aj4t8wjczk4pblmvucuu"
            target="_blank"
            className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white border border-white py-2 px-6 rounded transition-colors"
          >
            DEXSCREENER
          </Link>
        </div>
      </div>
    </div>
  );
}
