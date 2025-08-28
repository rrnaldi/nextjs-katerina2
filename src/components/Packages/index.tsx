import Link from 'next/link'
import React from 'react'
import { getPackages } from './action'
import { TPackage, TShow } from './types'
import Image from 'next/image'
import Slider from "@/components/Slider";
import Notes from '@/assets/images/notes.svg'
import People from '@/assets/images/people.svg'
import PinPoint from '@/assets/images/pinpoint.svg'



type Props = {
  show: TShow
};

// export function ContentCategory({data}: {data: TPackage}) {
//     return  <div className="flex flex-col items-center gap-y-2 relative">
//             <figure className="w-16 aspect-square relative">
//                 <Image 
//                 fill
//                 src={`${process.env.HOST_API}/storage/${data.photo}`} 
//                 alt={data.name}
//                 sizes="(max-width: 768px) 100vw"
//                  />

//             </figure>
//             <span className="">{data.name}</span>
//             <Link href={`/categories/${data.slug}`} className='absolute inset-0'></Link>
//           </div>
// }

export function ContentPopular({data}: {data: TPackage[] }) {

  if (data.length === 0) return "Tidak Ada Data"

  return (
    <Slider spaceBetween={20} swiperClassName="!h-[260px] !px-4" swiperSlideClassName="!w-[240px]">
      {data.map((item) => (
        <div key={item.id} className="h-full rounded-3xl overflow-hidden relative border">
          <figure className="w-full h-full absolute">
            <Image
              fill
              className="w-full h-full object-cover object-center"
              src={`${process.env.HOST_API}/storage/${item.thumbnail}`}
              alt={item.name}
              sizes="(max-width: 768px) 100vw"
            />
          </figure>
          <div className="absolute left-2 bottom-2 right-2 flex flex-col bg-white rounded-2xl p-3">
            <span className="font-semibold">{item.name}</span>
            <span className="flex gap-x-3">
              <span className="flex gap-x-1">
                <Image src={Notes} alt="Notes" />
                <span className="text-gray2">Healthy</span>
              </span>
              <span className="flex gap-x-1">
                <Image src={People} alt="People" />
                <span className="text-gray2">125</span>
              </span>
            </span>
          </div>
          <Link href={`/catering-packages/${item.slug}`} className="absolute inset-0"></Link>
        </div>
      ))}
    </Slider>
  );
}


export function ContentNewest({data, withTierDetailsQuantity}: {data: TPackage[], withTierDetailsQuantity?: boolean}) {
  return   <div className="flex flex-col gap-y-4 px-4">
            {
              data.map(item => {

                const lowestTier = item.tiers.length > 0 ?
                  item.tiers.reduce((min, current) => current.price < min.price ? current : min )
                 : null

                const highestTier = item.tiers.length > 0 ?
                  item.tiers.reduce((max, current) => current.price < max.price ? current : max )
                 : null

                return <div key={item.id} className="flex gap-x-3">
            <figure className="w-[120px] h-[160px] flex-none rounded-2xl overflow-hidden relative">
              <Image
              fill
              className="w-full h-full object-cover object-center"
              src={`${process.env.HOST_API}/storage/${item.thumbnail}`}
              alt={item.name}
              sizes="(max-width: 768px) 100vw"
            />
            </figure>
            <span className="flex flex-col gap-y-3 pt-4">
              <span className="font-semibold">{item.name}</span>
              <span className="flex gap-x-1">
                <span className="text-color2">
                   <Image src={Notes} alt="Notes" />
                </span>
                <span className="text-gray2">{item.category.name}</span>
              </span>

              <span className="flex gap-x-1">
                <span className="text-color2">
                  <Image src={People} alt="People" />
                </span>
                <span className="text-gray2">
                  {
                    lowestTier?.quantity || 0
                  }
                  {
                    !!withTierDetailsQuantity && `- ${highestTier?.quantity}`
                  }
                </span>
              </span>

              <span className="flex gap-x-1">
                <span className="text-color2">
                   <Image src={PinPoint} alt="PinPoint" />
                </span>
                <span className="text-gray2">{item.city.name}</span>
              </span>
            </span>
          </div>
              }) 
            }
        </div>
}

async function Categories({show}: Props) {
    const { data }: {data: TPackage[]} = await getPackages();

    if(show === "popular") {
      return <ContentPopular data={data.filter(item => item.is_popular === 1)} />
    }

    if(show === "newest") {
       return <ContentNewest data={data} />
    }
 return null;
}

export default Categories