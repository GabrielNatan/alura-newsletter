const Article = ({ title, text, tags, image }) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">({title})</h3>

        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase">{tag}</span>)
            }
        </div>

        <div className="grid gap-1">
            {
                text.map((content, index) => <p key={index}>{content}</p>)
            }
        </div>
    </div>
}

export default Article