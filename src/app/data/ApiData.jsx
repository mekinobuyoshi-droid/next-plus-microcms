import z from "zod";
const  ApiData = async(query) => {
        const newsSchema = z.object({
            id : z.string(),
            publishedAt: z.string(),
            title: z.string(),
            category: z.object({
                name : z.string(),
            }),
            content: z.string(),
        }).passthrough();

        const newsListSchema = z.object({
            "contents" : z.array(newsSchema),
            "totalCount" : z.number(),
            "limit" : z.number(),
        }).passthrough();

        try{
            const respons = await fetch(`https://tmgqc7gqd7.microcms.io/api/v1/news${query}`,{
            headers: {"X-MICROCMS-API-KEY" : process.env.MICROCMS_API_KEY,
            },
            cache: 'no-store',
            },);
            if(!respons.ok) {
                 throw new Error("レスポンスエラー");
            }
            const data = await respons.json();

            // const validatedData = newsSchema.parse(data);

            return {data};

        }catch (error) {
            console.error(error.message);
            const data  = {};
            return {data};
        }
}
export default ApiData;
