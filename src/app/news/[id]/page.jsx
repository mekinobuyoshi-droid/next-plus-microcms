import { formatDate } from "@/app/utils/formatDate";
import ApiData from "@/app/data/ApiData";
import CategoryLabel from "@/app/components/CategoryLabel";
import Breadcrumbs from "@/app/components/Breadcrumbs";
export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const {data} = await ApiData(`/${id}`);

    return {
        title: data?.title,
    }
};

const NewsDetail = async ({params}) => {
    const {id} = await params;
    const {data} = await ApiData(`/${id}`);

    const {getDate} = formatDate(data?.publishedAt);
    return (

        <div className="container mx-auto p-4 min-h-[80vh]">
            <Breadcrumbs title={data?.title} id={data?.id} />
            <h2 className="text-3xl text-center font-bold mb-7">{data?.title}</h2>
            <div className="mb-7">
                <CategoryLabel name={data?.category?.name} size={"text-base"}/>
                <span className="text-base inline-block ml-4">{`更新日時 : ${getDate}`}</span>
            </div>
            <div dangerouslySetInnerHTML={{__html: data.content}} className="prose prose-slate prose-blue max-w-none mb-20"></div>
        </div>
    )
};
export default NewsDetail;
