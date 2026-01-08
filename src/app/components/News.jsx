import { formatDate } from "../utils/formatDate";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";
import ApiData from "../data/ApiData";

const News = async ({limit}) =>  {
    const query = limit ? `?limit=${limit}` : "";
     const {data} = await ApiData(query);
        return (
                <div>
                    <ul className="flex flex-col gap-y-4  mb-20">
                        {data.contents?.map((content) => {
                            const {getDate} = formatDate(content?.publishedAt);
                            return (

                            <li key={content?.id}>
                                <Link href={`/news/${content?.id}`} className="flex items-center gap-x-4 ">
                                    <span className="inline-block min-w-[5.5em]">{getDate}</span>
                                    <CategoryLabel  name={content.category?.name} size={"text-xs"} />
                                    <span className="text-blue-600 visited:text-purple-600 hover:underline line-clamp-2">{content?.title}</span>
                                </Link>
                            </li>
                            )
                })}
                    </ul>
                </div>

    );
}
export default News;
