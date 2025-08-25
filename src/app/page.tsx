import Image from "next/image";
import LogoKaterina from '@/assets/images/logo-katerina.svg'
import FlagId from '@/assets/images/flag-id.svg'

export default function Home() {
  
  return <>
      <header className="flex items-center justify-between px-4">
        <span className="flex gap-x-2 items-center">
          <span className="text-color1">
            <Image src={LogoKaterina} alt="Logo Katerina" />
          </span>
          <span className="font-bold text-2xl">Katerina</span>
        </span>
        <span className="relative">
          <button
            className="flex gap-x-2 border border-gray1 rounded-full py-1 px-2">
            <Image src={FlagId} alt="Flag Indonesia" />
            <span className="">IDN</span>
          </button>
        </span>
      </header>
  </>;
}
