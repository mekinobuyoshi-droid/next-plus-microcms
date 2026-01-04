import News from "../components/News"
import Breadcrumbs from "../components/Breadcrumbs"
export const metadata =  {
    title: "News",
}

const AllNews = () => {
    return (
        <>
         <Breadcrumbs />
         <div className="mb-8 border-b-[3px] border-black pb-3">
             <h2 className="text-2xl font-bold">ニュース＆お知らせ</h2>
         </div>
         <News />
        </>
    )
}
export default AllNews;