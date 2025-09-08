"use client";
import React from "react";
import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      appendClassName="pt-16 bg-gray3 pb-20"
      title="By Category"
      back={{ historyBack: true }}
      thumbsUp={{ display: false }}
      more={{ display: false }}
    />
  );
}

export default ComposeHeader;
