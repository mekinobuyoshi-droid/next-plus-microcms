import { formatDate } from "../utils/formatDate";
import Link from "next/link";
import CategoryLabel from "./CategoryLabel";

const News = async ({limit}) =>  {
    const query = limit ? `?limit=${limit}` : "";
    const respons = await fetch(`https://tmgqc7gqd7.microcms.io/api/v1/news${query}`,{
        headers: {"X-MICROCMS-API-KEY" : process.env.MICROCMS_API_KEY},
        },);
    
    const data = await respons.json();
        return (
                <div>
                    <ul className="flex flex-col gap-y-4">
                        {data.contents?.map((content) => {
                            const {getDate} = formatDate(content.publishedAt);
                            return (

                            <li key={content.id}>
                                <Link href={`/news/${content.id}`} className="flex items-center gap-x-4 ">
                                    <span>{getDate}</span>
                                    <CategoryLabel  name={content.category.name} size={"text-xs"} />
                                    <span className="text-blue-600 visited:text-purple-600 hover:underline">{content.title}</span>
                                </Link>
                            </li>
                            )
                })}
                    </ul>
                </div>
               
    );
}
export default News;