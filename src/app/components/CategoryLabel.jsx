const CategoryLabel = ({name, size}) => {
    const categoryColor = {
         "お知らせ": "bg-blue-100 text-blue-700 border-blue-200",
         "重要": "bg-red-100 text-red-700 border-red-200",
         "製品情報": "bg-green-100 text-green-700 border-green-200",
    }
    const labelColor = categoryColor[name] || "bg-gray-100 text-gray-700 border-gray-200";;
    return (
        <span className={`inline-block min-w-[5.5em] text-center px-2 py-0.5 font-bold rounded border ${labelColor} ${size}`}>{name}</span>
    )
}
export default CategoryLabel;