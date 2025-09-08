import ModalFilterCategories from "@/components/Categories/ModalFilterCategories";
import {
  PreventScrolling,
  RouterBack,
  TModalPosRegistered,
  TModalRegistered,
} from "@/components/Modal";
import React from "react";

type Request = {
  searchParams: {
    modal: TModalRegistered;
    "modal-pos": TModalPosRegistered;
    [key: string]: string;
  };
};

async function Page({ searchParams }: Request) {
  const sp = await searchParams; // ✅ tunggu Promise

  if (!sp.modal) return null; // tidak ada ?modal=, jangan render apa pun

  let modalPosition = "items-center";
  let modalWrapper =
    "bg-white rounded-2xl p-4 flex flex-col gap-y-5 max-w-sm relative z-20";

  if (sp["modal-pos"] === "bottom") {
    modalPosition = "items-end";
    modalWrapper =
      "relative z-20 bg-white rounded-t-2xl p-4 flex flex-col gap-y-5 max-w-sm w-full shadow-[0px_-12px_30px_0px_#0D082245]";
  }

  return (
    <>
      <div
        id="modal"
        className={[
          "fixed inset-0 z-50 bg-color4/80 flex justify-center",
          modalPosition,
        ].join(" ")}
      >
        <div className={modalWrapper}>
          {sp.modal === "filter-category" && (
            <ModalFilterCategories categorySlug={sp.categorySlug} />
          )}
        </div>
        <RouterBack />
      </div>
      <PreventScrolling />
    </>
  );
}

export default Page;
