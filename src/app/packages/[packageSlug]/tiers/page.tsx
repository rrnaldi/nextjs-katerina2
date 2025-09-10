import React from "react";
import ComposeHeader from "@/app/packages/[packageSlug]/tiers/ComposeHeader";
import Image from "next/image";
import { TPackageDetails } from "@/components/Packages/types";
import { Metadata, ResolvingMetadata } from "next";
import { getPackageDetails } from "@/components/Packages/action";
import Notes from "@/assets/images/notes.svg";
import People from "@/assets/images/people.svg";
import { ContentTier } from "@/components/Tiers";

type Request = {
  params: Promise<{
    packageSlug: string;
  }>;
};
export async function generateMetadata(
  { params }: Request,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { packageSlug } = await params;

  const cateringPackage: { data: TPackageDetails } = await getPackageDetails(
    packageSlug
  );

  return {
    title: `Select Tier ${cateringPackage.data.name}`,
    description: cateringPackage.data.about,
  };
}

async function PackageTiersPage({ params }: Request) {
  const { packageSlug } = await params;

  const cateringPackage: { data: TPackageDetails } = await getPackageDetails(
    packageSlug
  );

  const lowestTier =
    cateringPackage.data.tiers.length > 0
      ? cateringPackage.data.tiers.reduce((min, current) =>
          current.price < min.price ? current : min
        )
      : null;

  const highestTier =
    cateringPackage.data.tiers.length > 0
      ? cateringPackage.data.tiers.reduce((max, current) =>
          current.price > max.price ? current : max
        )
      : null;
  return (
    <>
      <ComposeHeader />
      <section className="relative px-4 -mt-20 z-10">
        <div className="flex gap-x-3 bg-white shadow-[0px_12px_30px_0px_#07041517] p-3 rounded-3xl items-center">
          <figure className="w-[100px] h-[120px] relative flex-none rounded-2xl overflow-hidden">
            <Image
              fill
              className="w-full h-full object-cover object-center"
              src={`${process.env.HOST_API}/storage/${cateringPackage.data.thumbnail}`}
              alt={String(cateringPackage.data.name)}
              sizes="(max-width: 768px) 100vw"
            />
          </figure>
          <span className="flex flex-col gap-y-3">
            <span className="font-semibold">{cateringPackage.data.name}</span>
            <span className="flex gap-x-1">
              <span className="text-color2">
                <Image src={Notes} alt="Notes" />
              </span>
              <span className="text-gray2">
                {cateringPackage.data.category.name}
              </span>
            </span>

            <span className="flex gap-x-1">
              <span className="text-color2">
                <Image src={People} alt="People" />
              </span>
              <span className="text-gray2">
                {lowestTier?.quantity || 0} - {highestTier?.quantity || 0} orang
              </span>
            </span>
          </span>
        </div>
      </section>

      <section className="relative z-10 pb-10">
        <h2 className="font-semibold px-4 mb-3">Choose Your Package</h2>
        <div className="flex flex-col gap-y-4 px-4">
          {cateringPackage.data.tiers.map((tier) => {
            return (
              <ContentTier
                data={tier}
                key={tier.id}
                packageSlug={packageSlug}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default PackageTiersPage;
