export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-violet-200 to-pink-200">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-white rounded-2xl shadow-lg p-8 w-[700px]">
        <h1 className="font-bold text-xl">
          Hello👋, this is my task for JobDarman
        </h1>
        <p>
          As you've said, I didn't developed real APIs, but did my best to implement
          a robust access and refresh tokens handling with axios interceptors in
          NextJs 15 and TypeScript.
        </p>
        <p className=" text-gray-500 text-sm hover:scale-110 transition">
          Sincerely, Mojtaba✌️
        </p>
      </main>
    </div>
  );
}
