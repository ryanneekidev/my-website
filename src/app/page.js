import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] grid grid-cols-2 grid-rows-[calc(100vh-5rem)_24rem_24rem]">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 bg-pink-200/50 text-black text-xl flex justify-center items-center">
        left
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-cyan-200/50 text-black text-xl flex justify-center items-center">
        left
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-3 bg-green-200/50 text-black text-xl flex justify-center items-center">
        dummy
      </div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 bg-green-200/50 text-black text-xl flex justify-center items-center">
        dummy
      </div>
    </div>
  );
}
