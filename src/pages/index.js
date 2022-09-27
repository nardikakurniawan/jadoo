import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "components/Header";
import DecoreIntersect from "images/decore-intersect-1.svg";
import DecoreTextUnderline from "images/text-decore-hero.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo App Travel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 w-full py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 ">
          <DecoreIntersect className="fill-accent-4" />
        </span>
        <div className="w-96 h-96 border-2 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>
              <h2 className="text-gray-900 font-serif text-[84px] leading-[89px] tracking-tighter mb-8">
                Travel,
                <span className="relative">
                  enjoy{" "}
                  <span className="absolute left-0 top-full -mt-8 -ml-4 -z-10">
                    <DecoreTextUnderline className="w-[285px] h-[12px] fill-accent-2" />
                  </span>
                </span>
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-lg leading-8 mb-8">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex">
                <Link href="">
                  <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl">
                    Find out more
                  </a>
                </Link>
                <button className="flex items-center">
                  <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                    <span class="material-icons">play_arrow</span>
                  </span>
                  <span className="text-gray-500">Play demo</span>
                </button>
              </div>
            </div>

            <div className="w-[783px] h-[764px] pt-24 relative">
              <div className="absolute w-[137px] h-[95px] top-44 left-40 z-30">
                <Image
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src="/images/plane.png"
                />
              </div>
              <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
                <Image
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src="/images/plane.png"
                />
              </div>
              <div className="relative z-20 transform -translate-x-16">
                <Image
                  priority
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src="/images/hero-traveller.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
