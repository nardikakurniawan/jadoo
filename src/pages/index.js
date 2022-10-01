import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "components/Header";
import Testimonials from "components/Testimonials";
import DecorIntersect from "images/decor-intersect-1.svg";
import DecorTextUnderline from "images/text-decor-hero.svg";
import DecorPlus1 from "images/decor-plus-style-1.svg";
import DecorSwirl1 from "images/decor-swirl-style-1.svg";
import DecorEllips1 from "images/decor-ellips-style-1.svg";
import Facebook from "images/facebook.svg";
import Instagram from "images/instagram.svg";
import Twitter from "images/twitter.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta
          name="description"
          content="Travel app, life app, aplikasi jalan-jalan, pesan guide dan sebagainya"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://jadoo-ebon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo" />
        <meta
          property="og:description"
          content="Travel app, life app, aplikasi jalan-jalan, pesan guide dan sebagainya"
        />
        <meta
          property="og:image"
          content="https://jadoo-ebon.vercel.app/website-travel-online.jpg"
        />
      </Head>

      <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-12">
        <Header />
      </div>

      <section className="relative mb-28">
        <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 ">
          <DecorIntersect className="fill-accent-4" />
        </span>
        <div className="w-96 h-96 border-2 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="w-full lg:w-6/12 pt-52">
              <h1 className="text-accent-2 font-bold text-sm lg:text-xl uppercase mb-6">
                Best Destinations around the world
              </h1>
              <h2 className="text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[89px] tracking-tighter mb-8">
                Travel,{" "}
                <span className="relative">
                  enjoy{" "}
                  <span className="absolute left-0 top-full -mt-3 lg:-mt-8 -ml-4 -z-10">
                    <DecorTextUnderline className="w-[100px] lg:w-[285px] h-1 lg:h-[12px] fill-accent-2" />
                  </span>
                </span>
                and live a new and full life
              </h2>
              <p className="text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8">
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
                  <span className="hidden lg:block text-gray-500">
                    Play demo
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden lg:block w-[783px] h-[764px] pt-24 relative">
              <div className="absolute w-[137px] h-[95px] top-44 left-40 z-30">
                <Image
                  alt="plane"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src="/images/plane.png"
                />
              </div>
              <div className="absolute w-[137px] h-[95px] top-56 right-8 z-10">
                <Image
                  alt="plane"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  src="/images/plane.png"
                />
              </div>
              <div className="relative z-20 transform -translate-x-16">
                <Image
                  alt="hero traveller"
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
            <h3 className="text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug font-serif">
              We Offer Best Services
            </h3>
          </div>

          <div className="flex flex-wrap text-gray-900">
            <div className="w-full lg:w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-11">
                    <Image
                      alt="illustration radar"
                      layout="fixed"
                      width={60}
                      height={60}
                      src="/images/illustration-radar.png"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Calculated Weather</h4>
                <h5 className="px-0 lg:px-8 mb-8">
                  Built Wicket longer admire do barton vanity it self do in it.
                </h5>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform -translate-x-1/2">
                    <Image
                      alt="plane"
                      layout="fixed"
                      width={146}
                      height={133}
                      src="/images/plane.png"
                    />
                  </div>
                  <div className="absolute bottom-8 -right-9 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Best Flights</h4>
                <h5 className="px-0 lg:px-8 mb-8">
                  Engrossed listening. Park gate sell they west hard for the.
                </h5>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-8 top-2">
                    <Image
                      alt="illustration mic"
                      layout="fixed"
                      width={40}
                      height={69}
                      src="/images/illustration-mic.png"
                    />
                  </div>
                  <div className="absolute top-10 left-3 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Local Events</h4>
                <h5 className="px-0 lg:px-8 mb-8">
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
                </h5>
              </div>
            </div>

            <div className="w-full lg:w-3/12 px-8">
              <div className="relative transition-all duration-300 group shadow-none hover:shadow-great flex flex-col items-center justify-center text-center bg-white rounded-[36px]">
                <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10 bottom-12 group-hover:bottom-6 left-12 group-hover:left-6 transform -translate-x-1/2 translate-y-1/2 bg-accent-2 rounded-tl-3xl rounded-br-xl w-28 h-28"></div>
                <div className="relative mb-6 inline-flex h-28">
                  <div className="z-10 absolute transform translate-y-1/2 -translate-x-1/2 -right-10 top-3">
                    <Image
                      alt="illustration gear"
                      layout="fixed"
                      width={50}
                      height={50}
                      src="/images/illustration-gear.png"
                    />
                  </div>
                  <div className="absolute bottom-0 left-5 transform -translate-x-1/2 bg-accent-4 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md w-12 h-12"></div>
                </div>
                <h4 className="text-xl mb-3">Customization</h4>
                <h5 className="px-0 lg:px-8 mb-8">
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
              <h3 className="text-lg mb-2 text-gray-500">Top Selling</h3>
              <h3 className="text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug font-serif">
                Top Destinations
              </h3>
            </div>
            <div className="flex flex-wrap relative pr-0 lg:pr-10">
              <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
                <DecorSwirl1 className="stroke-gray-500" />
              </div>
              <div className="mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      alt="destination 2"
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

              <div className="mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      alt="destination 1"
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

              <div className="mb-10 lg:mb-0 w-full lg:w-4/12 px-6 relative z-20">
                <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
                  <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden relative h-96">
                    <Image
                      alt="destination 3"
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

      <section className="mb-28">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-0 lg:pl-8 lg:pr-20">
              <div className="flex flex-col mb-16">
                <h3 className="text-lg mb-2 text-gray-500">Easy and Fast</h3>
                <h3 className="text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug font-serif mb-10">
                  Book your next trip in 3 easy steps
                </h3>
                <ul className="flex flex-col gap-y-10 pr-0 lg:pr-10">
                  <li className="flex items-center">
                    <span className="bg-accent-1 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">navigation</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Choose Destination
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Doloremque, dolor?
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-2 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">credit_card</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Make Payment
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Doloremque, dolor?
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-accent-6 rounded-xl flex flex-none text-white items-center justify-center w-12 h-12">
                      <span className="material-icons">plane</span>
                    </span>
                    <div className="flex flex-col ml-4 leading-5">
                      <h6 className="font-bold mb-1 text-gray-500">
                        Reach Airport on Selected Date
                      </h6>
                      <p className="font-[400] text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Doloremque, dolor?
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex items-center justify-center">
              <div className="w-[370px] relative">
                <div className="absolute w-80 h-80 -top-10 -right-4 lg:-right-10 overflow-hidden lg:overflow-visible flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full blur-3xl z-10 bg-accent-7/40"></div>
                </div>

                <div className="absolute bottom-16 -right-4 lg:right-0 transform translate-x-0 lg:translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-great p-4 pr-7">
                  <div className="flex">
                    <span className="w-12 h-12 overflow-hidden rounded-full flex-none mr-3">
                      <Image
                        alt="destination 5"
                        layout="responsive"
                        width="100%"
                        height="100%"
                        src="/images/destinations-5.jpg"
                      />
                    </span>
                    <div className="flex flex-col w-full mb-2">
                      <span className="text-sm text-gray-500">Ongoing</span>
                      <h6 className="text-gray-900 mb-2">Trip to Rome</h6>
                      <span className="text-xs mb-1">
                        <span className=" text-accent-6">40%</span>
                        <span className=" text-gray-900">completed</span>
                      </span>
                      <span className="w-full bg-gray-200 h-1 rounded-full overflow-hidden flex">
                        <span className="bg-accent-6 rounded-full w-20 h-full"></span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl w-full h-full relative z-20 shadow-great pt-4 pb-5">
                  <div className="mx-4 rounded-3xl h-40 relative overflow-hidden mb-6">
                    <Image
                      alt="destinations 4"
                      layout="fill"
                      className="object-cover"
                      src="/images/destinations-4.jpg"
                    />
                  </div>
                  <h6 className="font-bold text-lg text-gray-900 px-4 mb-2">
                    Trip To Greece
                  </h6>
                  <div className="flex text-gray-500 px-4 mb-4">
                    <h6>14-29 June</h6>
                    <span className="mx02">|</span>
                    <h6>by Robin Joseph</h6>
                  </div>
                  <div className="flex gap-x-3 mx-4 mb-6">
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">spa</span>
                    </span>
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">map</span>
                    </span>
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base material-icons">near_me</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mx-4">
                    <span className="material-icons text-gray-500 mr-3 text-xl">
                      apartment
                    </span>
                    <span className="mr-auto text-gray-500">
                      24 people going
                    </span>
                    <span className="text-xl material-icons text-accent-6">
                      favorite_border
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="mb-28">
        <div className="max-w-full lg:max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  alt="client 1"
                  className="object-contain lg:object-none"
                  layout="fill"
                  src="/images/client-1.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  alt="client 2"
                  className="object-contain lg:object-none"
                  layout="fill"
                  src="/images/client-2.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  alt="client 3"
                  className="object-contain lg:object-none"
                  layout="fill"
                  src="/images/client-3.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  alt="client 4"
                  className="object-contain lg:object-none"
                  layout="fill"
                  src="/images/client-4.png"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/5 px-4">
              <div className="h-20 px-4 py-4 relative grayscale hover:grayscale-0 bg-white transform hover:-translate-y-1 hover:shadow-great rounded-2xl transition-all duration-300">
                <Image
                  alt="client 5"
                  className="object-contain lg:object-none"
                  layout="fill"
                  src="/images/client-5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-full lg:max-w-7xl mx-auto relative px-4">
          <div className="absolute w-36 h-36 lg:-right-20 -bottom-10 -z-10 transform rotate-90 translate-y-2">
            <DecorPlus1 className="decor-plus-style-1" />
          </div>
          <div className="w-full relative bg-white">
            <div className="relative">
              <div
                className="relative lg:absolute flex justify-center items-center text-white rounded-full transform translate-y-0 lg:-translate-y-1/2 -translate-x-1/2 lg:translate-x-1/2 z-30 
              left-1/2 top-8 lg:top-0 right-auto lg:right-0 w-16 h-16 bg-gradient-to-b from-accent-6/60 to-accent-6"
              >
                <span className="material-icons">near_me</span>
              </div>

              <div className="bg-accent-3/20 overflow-hidden rounded-tl-3xl lg:rounded-tl-[120px]  rounded-lg lg:rounded-3xl relative z-20 pt-20 pb-20 mb-8">
                <div className="w-[284px] h-[290px] absolute -top-8 -right-28 transform -rotate-45">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>
                <div className="w-[390px] h-[390px] absolute -bottom-32 left-10 ">
                  <DecorEllips1 className="stroke-accent-6 opacity-10" />
                </div>

                <div className="relative">
                  <h6 className="text-gray-500 font-bold text-lg lg:text-3xl px-4 lg:px-36 text-center leading-normal mb-10">
                    SUbscribe to ger information, latest news and order
                    interesting offer about Cobham
                  </h6>

                  <form className="flex justify-center">
                    <fieldset className="relative mr-0 lg:mr-8">
                      <div className="w-16 h-16 absolute flex items-center justify-center">
                        <span className="material-icons text-gray-500 ">
                          mail_outline
                        </span>
                      </div>

                      <input
                        type="text"
                        className="appearance-none rounded-tr-none rounded-br-none lg:rounded-tr-lg lg:rounded-br-lg rounded-lg py-5 pl-14 bg-white w-auto lg:w-96 focus:outline-none transition duration-200 border-2 border-transparent focus:border-accent-6"
                        placeholder="Your Email"
                      />
                    </fieldset>
                    <button className="rounded-tl-none rounded-bl-none lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg text-white bg-gradient-to-b from-accent-2/90 to-accent-2 py-5 px-4 lg:px-16">
                      <span className="hidden lg:block">Subscribe</span>
                      <span className="block lg:hidden material-icons">
                        card_membership
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 relative overflow-hidden">
        <div className="absolute w-80 h-80 bottom-0 right-0 overflow-hidden">
          <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-6/20"></div>
        </div>

        <div className="max-w-full lg:max-w-7xl mx-auto relative px-4">
          <div className="flex flex-wrap mb-12">
            <div className="w-full lg:w-3/12 px-4">
              <h6 className="text-5xl tracking-tight text-gray-900 mb-4">
                Jadoo.
              </h6>
              <p className="text-sm text-gray-500 pr-8">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>

            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-4">
                Company
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mobile">
                    <a>Mobile</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-4">
                Contact
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/faq">
                    <a>Help/FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <a>Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates">
                    <a>Affilates</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-2/12 px-4">
              <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-4">
                More
              </h6>
              <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
                <li>
                  <Link href="/airlinefees">
                    <a>Airlinefees</a>
                  </Link>
                </li>
                <li>
                  <Link href="/airline">
                    <a>Airline</a>
                  </Link>
                </li>
                <li>
                  <Link href="/low-fare-tips">
                    <a>Low fare tips</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-2/12 px-4">
              <ul className="text-lg text-gray-500 flex gap-x-5">
                <li>
                  <a
                    href="https://facebook.com"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Facebook className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Instagram className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                    <span className="relative z-20">
                      <Twitter className="fill-black group-hover:fill-white transition-colors duration-300" />
                    </span>
                  </a>
                </li>
              </ul>

              <h6 className="text-xl tracking-tight text-gray-500 mt-7 mb-3">
                Discover our app
              </h6>

              <ul className="flex">
                <li className="relative w-[137px] h-[35px]">
                  <a
                    href="https://google.com/"
                    className="relative h-full w-full flex"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      alt="google play"
                      className="object-none"
                      layout="fill"
                      src="/images/google-play.png"
                    />
                  </a>
                </li>
                <li className="relative w-[137px] h-[35px]">
                  <a
                    href="https://apple.com/"
                    className="relative h-full w-full flex"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      alt="app store"
                      className="object-none"
                      layout="fill"
                      src="/images/app-store.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            All right reserved@jadoo.co
          </div>
        </div>
      </section>
    </div>
  );
}
