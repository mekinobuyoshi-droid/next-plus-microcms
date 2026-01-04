"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Breadcrumbs = ({id = "", title = ""}) => {
    const path = usePathname();
    const bread = path.split("/");
    const newBread = bread.filter((v) => v !== "")
    console.log(newBread);
    return (
        <div className="mb-10">
            <span><Link href={"/"} className="hover:underline text-blue-600">TOPページ</Link>{` > `}</span>
            {newBread.map((v,i) => {
                const hullPath = "/" + newBread.slice(0, i +1).join("/");
                console.log(hullPath);
                return (
                    <span key={i}>{v === id ? <Link href={hullPath} className={i === newBread.length - 1 ? "" : "hover:underline text-blue-600"}>{title}</Link> : <Link href={hullPath} className={i === newBread.length - 1 ? "" : "hover:underline text-blue-600"}>{v}</Link>}{i === newBread.length - 1 ? "" : " > "}</span>
                )
            })}
        </div>
    )

}
export default Breadcrumbs;