"use client";
import React from "react";
import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      title="Tier Package"
      appendClassName="pt-16 bg-gray3 pb-20"
      back={{ historyBack: true }}
      thumbsUp={{ display: false }}
      more={{ display: true, onClick: () => {} }}
    />
  );
}

export default ComposeHeader;
