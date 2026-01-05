import { formatDate } from "@/app/utils/formatDate";
import CategoryLabel from "@/app/components/CategoryLabel";
import Breadcrumbs from "@/app/components/Breadcrumbs";
export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const respons = await fetch(`https://tmgqc7gqd7.microcms.io/api/v1/news/${id}`,{
        headers: {"X-MICROCMS-API-KEY" : process.env.MICROCMS_API_KEY,
        cache: 'no-store',
        },
        },);
    const news = await respons.json();

    return {
        title: news.title,
    }
};

const NewsDetail = async ({params}) => {
        const {id} = await params;
    const respons = await fetch(`https://tmgqc7gqd7.microcms.io/api/v1/news/${id}`,{
        headers: {"X-MICROCMS-API-KEY" : process.env.MICROCMS_API_KEY,
        cache: 'no-store'
        },
        },);
    const news = await respons.json();
    console.log(news);
    const {getDate} = formatDate(news.publishedAt);
    return (

        <div className="container mx-auto p-4">
            <Breadcrumbs title={news.title} id={news.id} />
            <h2 className="text-3xl text-center font-bold mb-7">{news.title}</h2>
            <div className="mb-7">
                <CategoryLabel name={news.category.name} size={"text-base"}/>
                <span className="text-base inline-block ml-4">{`更新日時 : ${getDate}`}</span>
            </div>
            <div dangerouslySetInnerHTML={{__html: news.content}} className="prose prose-slate prose-blue max-w-none"></div>
        </div>
    )
};
export default NewsDetail;
