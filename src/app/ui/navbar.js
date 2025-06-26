export default function Navbar(){
    return (
        <>
            <div className="w-full h-[60px] bg-pink-500 rounded-full flex justify-center items-center border-1 border-white/20" style={{background: "linear-gradient(to right, rgba(108, 80, 150, 0.5), rgba(32, 7, 66, 0.4));"}}>
                <a className="text-xl relative text-white hover:cursor-pointer group mx-[1.5rem]">
                    <span className="z-10 group-hover:cursor-pointer">About</span>
                    <div className="bg-indigo-400 rounded-full w-[50%] absolute h-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">.</div>
                </a>
                <a className="text-xl font-semibold relative text-white hover:cursor-pointer group mx-[1.5rem]">
                    <span className="z-10 group-hover:cursor-pointer">Home</span>
                    <div className="bg-indigo-400 rounded-full w-[50%] absolute h-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">.</div>
                </a>
                <a className="text-xl relative text-white hover:cursor-pointer group mx-[1.25rem]">
                    <span className="z-10 group-hover:cursor-pointer">Projects</span>
                    <div className="bg-indigo-400 rounded-full w-[50%] absolute h-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out">.</div>
                </a>
            </div>
        </>
    )
}