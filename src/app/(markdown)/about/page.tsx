import Image from "next/image";
import About from "@/markdown/about.mdx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-p:text-black prose-ul:text-black prose-li:text-black prose-a:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white dark:prose-p:text-white dark:prose-a:text-white dark:prose-ul:text-white dark:prose-li:text-white dark:prose-ol:text-white dark:prose-strong:text-white">
            <About/>
          </div>
        </div>
      </main>
    </div>
  );
}
