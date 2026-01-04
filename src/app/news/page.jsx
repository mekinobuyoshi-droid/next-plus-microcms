import News from "../components/News"
import Breadcrumbs from "../components/Breadcrumbs"
export const metadata =  {
    title: "News",
}

const AllNews = () => {
    return (
        <div className="container mx-auto p-4">
         <Breadcrumbs />
         <div className="mb-8 border-b-[3px] border-black pb-3">
             <h2 className="text-2xl font-bold">ニュース＆お知らせ</h2>
         </div>
         <News />
        </div>
    )
}
export default AllNews;