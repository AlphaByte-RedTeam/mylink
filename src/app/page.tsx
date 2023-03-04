import Image from "next/image"
import Link from "next/link"
import { GithubCircle, Instagram, Twitter, LinkedIn, Mail } from "iconoir-react"
import { IBM_Plex_Mono } from "next/font/google"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif", "system-ui"],
  weight: "400",
})

export default function Home() {
  return (
    <main className="flex flex-col space-y-14 justify-center max-w-3xl p-8 mx-auto bg-black min-h-screen min-w-screen md:min-w-3xl">
      <Image
        className="absolute z-10 blur-[128px] opacity-60"
        src="/gradient.svg"
        alt="Gradient background"
        width={650}
        height={650}
      />
      <div className="flex flex-col items-start md:items-center md:flex-row gap-6 z-20">
        <Image
          className="rounded-md md:w-40 md:h-40"
          src="/myphoto.png"
          alt="Andrew's photo"
          width={128}
          height={128}
        />
        <div className="space-y-2">
          <span className="flex flex-col items-start gap-3">
            <h1 className="text-white text-xl md:text-3xl leading-7 md:leading-9 font-bold">
              Andrew Virya Victorio
            </h1>
            <p className="text-zinc-400 text-base md:text-xl">
              🧑‍💻 Software Engineer
            </p>
          </span>
          <p className="text-gray-400 text-sm md:text-lg leading-5 md:leading-7 font-normal">
            Strong work ethic and have high standards, collaborative team
            player, IT enthusiast, 3rd year Computer Science student at Bunda
            Mulia University.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 z-20">
        <Link href="https://github.com/AlphaByte-RedTeam" target="_blank">
          <button className="flex flex-row w-full justify-between px-4 py-4 items-center gap-6 rounded-md bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism text-xs md:text-base leading-4 md:leading-6 font-normal text-white border border-gray-300 transition ease-in-out duration-300 hover:bg-glassmorphishm-38 hover:-translate-y-2">
            <GithubCircle className="inline-block w-6 h-6 text-white" />
            <span className="tex-white content-center">
              GitHub/AlphaByte-RedTeam
            </span>
            <div>{""}</div>
          </button>
        </Link>
        <Link href="https://instagram.com/avv_210/" target="_blank">
          <button className="flex flex-row w-full justify-between px-4 py-4 items-center gap-6 rounded-md bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism text-xs md:text-base leading-4 md:leading-6 font-normal text-white border border-fuchsia-300 transition ease-in-out duration-300 hover:bg-glassmorphishm-38 hover:-translate-y-2">
            <Instagram className="inline-block w-6 h-6 text-white" />
            <span className="tex-white content-center">Instagram/@avv_210</span>
            <div>{""}</div>
          </button>
        </Link>
        <Link href="https://twitter.com/avv_210" target="_blank">
          <button className="flex flex-row w-full justify-between px-4 py-4 items-center gap-6 rounded-md bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism text-xs md:text-base leading-4 md:leading-6 font-normal text-white border border-blue-300 transition ease-in-out duration-300 hover:bg-glassmorphishm-38 hover:-translate-y-2">
            <Twitter className="inline-block w-6 h-6 text-white" />
            <span className="tex-white content-center">Twitter/@avv_210</span>
            <div>{""}</div>
          </button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrew-virya-victorio/"
          target="_blank"
        >
          <button className="flex flex-row w-full justify-between px-4 py-4 items-center gap-6 rounded-md bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism text-xs md:text-base leading-4 md:leading-6 font-normal text-white border border-blue-500 transition ease-in-out duration-300 hover:bg-glassmorphishm-38 hover:-translate-y-2">
            <LinkedIn className="inline-block w-6 h-6 text-white" />
            <span className="tex-white content-center">
              Linked In/Andrew Virya Victorio
            </span>
            <div>{""}</div>
          </button>
        </Link>
        <Link
          href="mailto:andrew.avv03@gmail.com?subject=I want to collaborate with you!"
          target="_blank"
        >
          <button className="flex flex-row w-full justify-between px-4 py-4 items-center gap-6 rounded-md bg-gradient-to-br from-glassmorphishm-38 to-glassmorphishm-8 drop-shadow-glassmorphism text-xs md:text-base leading-4 md:leading-6 font-normal text-white border border-red-500 transition ease-in-out duration-300 hover:bg-glassmorphishm-38 hover:-translate-y-2">
            <Mail className="inline-block w-6 h-6 text-white" />
            <span className="tex-white content-center">
              Email/andrew.avv03@gmail.com
            </span>
            <div>{""}</div>
          </button>
        </Link>
      </div>
      <div
        className="flex flex-row gap-4 overflow-x-scroll scrollbar-hide z-20"
        style={ibmPlexMono.style}
      >
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          web dev
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          mobile dev
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          ui design
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          cyber security
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          software engineering
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          artificial intelligence
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          project management
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          leadership
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          next.js
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          flutter
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          c++
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          dart
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          javascript
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          typescript
        </p>
        <p className="flex justify-center items-center rounded-full px-2 p-1 bg-zinc-900 text-gray-400 whitespace-nowrap text-sm">
          python
        </p>
      </div>
      <footer>
        <Link href="https://vercel.com" target="_blank">
          <div className="flex flex-row justify-center z-20 items-center gap-2">
            <p className="text-white text-base font-semibold font-sans">
              Deployed by {""}
            </p>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </div>
        </Link>
      </footer>
    </main>
  )
}
