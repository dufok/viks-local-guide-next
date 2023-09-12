import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import content from "../../db/content.json";


export default function Home() {
  return (
    <>
      <Head>
        <title>Local Guidebook</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col max-w-5xl items-center justify-center gap-12 px-4 py-16 transition-all duration-300 ease-in-out">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] ">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Mercer Island</span> Guidebook
          </h1>
          <div className="text-lg text-white" >Welcome to the Great Seattle Area! As someone who&apos;s explored every nook and cranny of this town, I&apos;ve handpicked a few of our favorite places to EAT, DRINK, and things to DO. Whether you&apos;re a local or just visiting our Emerald City, these places will offer you a unique experience.</div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8 " >
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#food-section"
              >
              <h1 className="text-7xl md:text-9xl text-center ">🥘</h1>
              <div className="text-lg">
                We love our local eateries. Here&apos;s a few of our favorites and how we rate them. <span className=" text-[hsl(280,100%,70%)]">EAT</span>
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#drink-section"
              >
              <h1 className="text-7xl md:text-9xl text-center">🍾</h1>
              <div className="text-lg">
                We love our local wineries, pubs, and bars. Here&apos;s a few of our favorites and how we rate them. <span className=" text-[hsl(280,100%,70%)]">DRINK</span>
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 "
              href="#go-section"
              >
              <h1 className="text-7xl md:text-9xl text-center">👟</h1>
              <div className="text-lg">
                There&apos;s so much to explore in Mercer Island and Surrounds. Here&apos;s a few local activities you might enjoy. <span className=" text-[hsl(280,100%,70%)]">DO</span>
              </div>
            </Link>
          </div>

          <h3 id="food-section" className="self-start text-white font-bold text-3xl gap-4 md:gap-8">
            <span className=" text-[hsl(280,100%,70%)]">EAT</span>
          </h3>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
          { Object.values(content.food).map((item, idx) => (
              <Link
              key={idx}
              className="flex max-w-5xl gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={item.link}
              target="_blank"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] items-top gap-2">
                  <div className="relative h-64 w-64" >
                    <Image
                        src={item.image} 
                        alt="Google Maps Image" 
                        className="object-cover object-center rounded-xl"
                        layout="fill"
                        />
                  </div>
                  <div className="flex flex-col justify-between h-full text-left">
                    <div>
                      <h3 className="text-2xl font-bold my-4 sm:my-0 sm:mb-4" >{item.name}</h3>
                      <div className="text-lg">
                        {item.description}
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="text-4xl ml-4">
                          🚶‍♂️
                      </div>
                      <div className="text-lg">
                          {item.walk}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h3 id="drink-section" className="self-start text-white font-bold text-3xl gap-4 md:gap-8">
            <span className=" text-[hsl(280,100%,70%)]">DRINK</span>
          </h3>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
          { Object.values(content.drink).map((item, idx) => (
              <Link
              key={idx}
              className="flex max-w-5xl gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={item.link}
              target="_blank"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] items-top gap-2">
                  <div className="relative h-64 w-64" >
                    <Image
                        src={item.image} 
                        alt="Google Maps Image" 
                        className="object-cover object-center rounded-xl"
                        layout="fill"
                        />
                  </div>
                  <div className="flex flex-col justify-between h-full text-left">
                    <div>
                      <h3 className="text-2xl font-bold my-4 sm:my-0 sm:mb-4" >{item.name}</h3>
                      <div className="text-lg">
                        {item.description}
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="text-4xl ml-4">
                          🚶‍♂️
                      </div>
                      <div className="text-lg">
                          {item.walk}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h3 id="go-section" className="self-start text-white font-bold text-3xl ">
            <span className=" text-[hsl(280,100%,70%)]">DO</span>
          </h3>

          <div className="grid grid-cols-1 gap-4 md:gap-8">
            { Object.values(content.go).map((item, idx) => (
              <Link
              key={idx}
              className="flex max-w-5xl gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={item.link}
              target="_blank"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] items-top gap-2">
                  <div className="relative h-64 w-64" >
                    <Image
                        src={item.image} 
                        alt="Google Maps Image" 
                        className="object-cover object-center rounded-xl"
                        layout="fill"
                        />
                  </div>
                  <div className="flex flex-col justify-between h-full text-left">
                    <div>
                      <h3 className="text-2xl font-bold my-4 sm:my-0 sm:mb-4" >{item.name}</h3>
                      <div className="text-lg">
                        {item.description}
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="text-4xl ml-4">
                          🚶‍♂️
                      </div>
                      <div className="text-lg">
                          {item.walk}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8 " >
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#food-section"
              >
              <h1 className="text-7xl md:text-9xl text-center ">🥘</h1>
              <div className="text-lg">
                Places where you can eat and drink in the city.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#drink-section"
              >
              <h1 className="text-7xl md:text-9xl text-center">🍾</h1>
              <div className="text-lg">
                Places where you can drink in the city.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 "
              href="#go-section"
              >
              <h1 className="text-7xl md:text-9xl text-center">👟</h1>
              <div className="text-lg">
                Places where you can go and have fun in the city.
              </div>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
