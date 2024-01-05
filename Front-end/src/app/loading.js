export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-14 bg-white">
      <div className="flex gap-3">
        <img src="vector.png" className="w-8 h-8 mt-1"></img>
        <h1 className="font-bold text-4xl">Geld</h1>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg bg-blue-600"></span>
        <p className="font-bold">Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
}
