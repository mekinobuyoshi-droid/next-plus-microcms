import Link from "next/link";
const Header = () => {
    return (
<header className="border-b border-gray-100 bg-white sticky top-0 z-50">
  <div className="container mx-auto px-4 min-h-[10vh] flex items-center justify-between">
    <h1 className="text-2xl font-black tracking-tight">
      <Link href="/">
        SAMPLE <span className="text-blue-600">CORP.</span>
      </Link>
    </h1>

    {/* ナビゲーション */}
    <nav>
      <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            TOP
          </Link>
        </li>
        <li>
          {/* お問い合わせだけボタン風にすると視認性がグッと上がる */}
          <Link
            href="https://forms.gle/jasioXz5J7kekoqX7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all text-xs"
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
    )
};
export default Header;
