"use client";
import React from "react";
import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      appendClassName="pt-16 absolute z-20"
      back={{ historyBack: true }}
      thumbsUp={{ display: true, onClick: () => {} }}
      more={{ display: true, onClick: () => {} }}
    />
  );
}

export default ComposeHeader;
