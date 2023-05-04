import "./../../index.css";

function TitleHeader(props) {
    return(
        <>
            <section className="w-full h-[60px] bg-slate-800 text-white flex justify-start items-center">
                <div className="container mx-auto box-border p-2 h-full flex justify-start items-center">
                    <span className="font-bold text-xl">Todo App</span>
                </div>
            </section>
        </>
    )
}

export default TitleHeader;