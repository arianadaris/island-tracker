export default function FormAction({
    handleSubmit, type="Button", action="submit", text
}){
    return (
        <>
            {
                type==="Button" ?
                <button
                    type={action}
                    className="my-4 group relative hover:bg-transparent"
                    onClick={handleSubmit}
                >
                    <div className="bg-yellow w-full h-6 absolute left-1/2 transform -translate-x-1/2 p-4 rounded-xl z-[0] top-1"></div>
                    <p className="relative z-10">{text}</p>
                    <div className="w-[4rem] h-4 rounded-xl bg-darkYellow mt-[-1rem] relative z-[4] hidden group-hover:block left-1/2 transform -translate-x-1/2"></div>
                </button>
                :
                <></>
            }
        </>
    );
} ;