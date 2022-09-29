import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "components/Header";
import DecorIntersect from "images/decor-intersect-1.svg";
import DecorTextUnderline from "images/text-decor-hero.svg";
import DecorPlus1 from "images/decor-plus-style-1.svg";
import DecorSwirl1 from "images/decor-swirl-style-1.svg";

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
          <DecorIntersect className="fill-accent-4" />
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
                    <DecorTextUnderline className="w-[285px] h-[12px] fill-accent-2" />
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
                    <span className="material-icons">play_arrow</span>
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

      <section className="mb-32">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-10 -top-10">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>

          <div className="text-center flex flex-col mb-16">
            <h3 className="uppercase text-lg mb-2 text-gray-500">Category</h3>
            <h3 className="text-5xl text-gray-900 leading-snug font-serif">
              We Offer Best Services
            </h3>
          </div>

          <div className="flex text-gray-900">
            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/illustration-radar.png"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Calculated Weather</h4>
                <h5 className="px-8 mb-8">
                  Built Wicket longer admire do barton vanity it self do in it.
                </h5>
              </div>
            </div>

            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform -translate-x-1/2">
                    <Image
                      layout="fixed"
                      width={146}
                      height={133}
                      src="/images/plane.png"
                    />
                  </div>
                  <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Best Flights</h4>
                <h5 className="px-8 mb-8">
                  Engrossed listening. Park gate sell they west hard for the.
                </h5>
              </div>
            </div>

            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-8 top-2">
                    <Image
                      layout="fixed"
                      width={40}
                      height={69}
                      src="/images/illustration-mic.png"
                    />
                  </div>
                  <div className="absolute top-10 left-3 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Local Events</h4>
                <h5 className="px-8 mb-8">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </h5>
              </div>
            </div>

            <div className="w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-10 top-3">
                    <Image
                      layout="fixed"
                      width={50}
                      height={50}
                      src="/images/illustration-gear.png"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Customization</h4>
                <h5 className="px-8 mb-8">
                  We deliver outsourced aviation services for military customers
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-28">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="text-center flex flex-col">
            <div className="text-center flex flex-col mb-16">
              <h3 className="uppercase text-lg mb-2 text-gray-500">
                Top Selling
              </h3>
              <h3 className="text-5xl text-gray-900 leading-snug font-serif">
                Top Destinations
              </h3>
            </div>
            <div className="flex relative pr-10">
              <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
                <DecorSwirl1 className="stroke-gray-500" />
              </div>
              <div className="w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      layout="fill"
                      className="object-cover"
                      src="/images/destinations-2.jpg"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="pt-7 px-5 flex justify-between">
                      <h6 className="text-lg">London, UK</h6>
                      <h6 className="text-lg">$4.2k</h6>
                    </div>
                    <div className="pt-4 px-5 flex items-center">
                      <span className="material-icons mr-2 text-black">
                        near_me
                      </span>
                      <span className="">12 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      layout="fill"
                      className="object-cover"
                      src="/images/destinations-1.jpg"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="pt-7 px-5 flex justify-between">
                      <h6 className="text-lg">Rome, Italy</h6>
                      <h6 className="text-lg">$5,42k</h6>
                    </div>
                    <div className="pt-4 px-5 flex items-center">
                      <span className="material-icons mr-2 text-black">
                        near_me
                      </span>
                      <span className="">10 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      layout="fill"
                      className="object-cover"
                      src="/images/destinations-3.jpg"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="pt-7 px-5 flex justify-between">
                      <h6 className="text-lg">Full Europe</h6>
                      <h6 className="text-lg">$15k</h6>
                    </div>
                    <div className="pt-4 px-5 flex items-center">
                      <span className="material-icons mr-2 text-black">
                        near_me
                      </span>
                      <span className="">28 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
