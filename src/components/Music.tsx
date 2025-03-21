import Link from "next/link";
import Image from "next/image";

export default function Music() {
  return (
    <div className="bg-toby-black py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-white font-archivo text-3xl md:text-4xl mb-12">
          TOBY TUNES
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Album info */}
          <div className="max-w-md">
            <h3 className="text-white font-archivo text-2xl md:text-3xl mb-4">
              Shell shocked
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Toby&apos;s first album is also the first album produced by a meme coin
              {"{Turtle}"} character, join us as the album combines different styles
              with lot of crypto references and if your lucky you will hear your
              name shot out in the album.
            </p>

            {/* SoundCloud embed placeholder */}
            <div className="bg-gray-900 rounded-md overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="https://ext.same-assets.com/2330270553/2063066502.jpeg"
                  alt="Shell Shocked Album Cover"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                    <span className="text-white">▶</span>
                  </div>
                  <div>
                    <p className="text-white text-sm">Toby the Turtle</p>
                    <p className="text-gray-400 text-xs">Toby Vibez</p>
                  </div>
                </div>
                <Link
                  href="https://soundcloud.com/toby-the-turtle/toby-vibez"
                  target="_blank"
                  className="text-toby-green hover:text-toby-green/80 text-sm font-medium transition-colors"
                >
                  Listen on SoundCloud
                </Link>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex-1 flex flex-col md:h-[480px] justify-between">
            {/* Waveform visualization */}
            <div className="hidden md:block">
              <div className="h-40 flex items-end justify-between gap-1 px-6">
                {/* Generate random waveform bars */}
                {Array.from({ length: 50 }).map((_, index) => {
                  const height = Math.max(20, Math.floor(Math.random() * 100));
                  return (
                    <div
                      key={index}
                      className="w-1 bg-toby-green opacity-70"
                      style={{ height: `${height}%` }}
                    ></div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-2 px-6 mb-6">
                <span className="text-gray-400 text-xs">0:00</span>
                <span className="text-gray-400 text-xs">3:51</span>
              </div>
            </div>
            
            {/* Added image */}
            <div className="hidden md:block w-full">
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/images/rs=w_1160,h_1159.webp"
                  alt="Toby the Turtle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
