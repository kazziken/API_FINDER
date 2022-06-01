
import React from "react";
import Card from "./Card";

function Container({showApis}) {
  const renderApis = showApis.map((api) => <Card key = {api.id} api = {api}/>)
  

  return (
    <div>
      {renderApis}
      </div>
  );
}

export default Container;