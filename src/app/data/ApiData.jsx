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
        });

        const newsListSchema = z.object({
            "contents" : z.array(newsSchema),
            "totalCount" : z.number(),
            "limit" : z.number(),
        });

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

            if(data.contents && Array.isArray(data.contents)) {

                const validatedData = newsListSchema.parse(data);
                return {data: validatedData};

            } else {
                const validatedData = newsSchema.parse(data);
                return {data: validatedData};
            }



        }catch (error) {
            console.error(error.message);
            const data  = {};
            return {data};
        }
}
export default ApiData;
