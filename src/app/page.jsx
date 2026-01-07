import News from "./components/News"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
  return (
   <div>
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/main-visual.jpg"
          alt="MEGI CORP. メインビジュアル"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              SAMPLE CORP.
            </h2>
          </div>
        </div>
      </section>

      <div className="max-w-screen-md mx-auto px-6 py-16">

        <section>
          <div className="flex items-end justify-between mb-8 border-b-[3px] border-black pb-3">
            <h2 className="text-2xl font-bold">ニュース＆お知らせ</h2>
            <Link href="/news" className="text-sm font-bold text-blue-600 hover:underline pb-1">
              一覧を見る ＞
            </Link>
          </div>
          <News limit={4}/>
        </section>

        <section className="bg-gray-50 rounded-3xl p-10 text-center">
          <h3 className="text-xl font-bold mb-4">お気軽にご相談ください。</h3>
          <Link
            href="https://forms.gle/jasioXz5J7kekoqX7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all"
          >
            お問い合わせフォーム
          </Link>
        </section>
      </div>
    </div>

  )
};
