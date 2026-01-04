/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // これがあれば src 以下の全ファイルカバーできる！
  ],
theme: {
    container: {
      center: true,
      padding: '1rem',
      // これを足すと、1280pxで幅が止まって、それ以上は左右の余白になる
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px', // ここがポイント！2xlになっても1280pxのままにする
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}