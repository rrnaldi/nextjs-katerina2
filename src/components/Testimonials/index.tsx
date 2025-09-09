import Link from "next/link";
import React from "react";
import { getAllTestimonials } from "./action";
import { TTestimonials } from "./types";
import Image from "next/image";
import Slider from "@/components/Slider";
import Star from "@/assets/images/star.svg";
import People from "@/assets/images/people.svg";
import PinPoint from "@/assets/images/pinpoint.svg";

export function ContentTestimonials({ data }: { data: TTestimonials }) {
  return (
    <div className="h-full rounded-3xl overflow-hidden relative border border-gray-200 p-3 flex flex-col gap-y-3">
      <span className="text-color1 flex gap-x-1">
        <Image src={Star} alt="Star" />
        <Image src={Star} alt="Star" />
        <Image src={Star} alt="Star" />
        <Image src={Star} alt="Star" />
      </span>

      <p className="italic text-sm font-semibold leading-6">
        “{data.message} ”
      </p>

      <div className="flex gap-x-3 items-center">
        <figure className="w-9 flex-none aspect-square relative rounded-full overflow-hidden">
          <Image
            fill
            className="w-full h-full object-cover object-center"
            src={`${process.env.HOST_API}/storage/${data.photo}`}
            alt="slide sale 1"
            sizes="(max-width: 768px) 100vw"
          />
        </figure>
        <span className="font-semibold">{data.name}</span>
      </div>
    </div>
  );
}

export function WrapperTestimonials({ data }: { data: TTestimonials[] }) {
  return (
    <Slider
      spaceBetween={20}
      swiperClassName="!h-[156px] !px-4"
      swiperSlideClassName="!w-[280px]"
    >
      {data.map((item) => {
        return <ContentTestimonials key={item.id} data={item} />;
      })}
    </Slider>
  );
}

async function Testimonials() {
  const { data }: { data: TTestimonials[] } = await getAllTestimonials();

  if (data.length === 0) return "Tidak Ada Data";
  return <WrapperTestimonials data={data} />;
}

export default Testimonials;
