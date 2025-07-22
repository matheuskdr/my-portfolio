type pageTitlle = {
    name: string
    desc?: string
}

export const PageTitlle = ({name, desc}: pageTitlle) => {
    return(
        <div className="flex flex-col items-center gap-3 mb-10">
                    <h1 className="font-bold text-4xl md:text-6xl">
                        {name}
                    </h1>
                    <p className="text-gray-400 text-md md:text-lg mt-2">
                        {desc}
                    </p>
                </div>
    );
}