import LinkButton from "@/components/link-button";
import PageTitle from "@/components/page-title";
import React from "react";

function Lotteries() {
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Lotteries" />
        <LinkButton title="Create Lottery" path="/admin/lotteries/create" />
      </div>
    </div>
  );
}

export default Lotteries;
