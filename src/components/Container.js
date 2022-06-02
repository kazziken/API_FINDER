import React from "react";
import ApiCard from "./ApiCard";


function Container({showApis}) {
  const renderApis = showApis.map((api) => <ApiCard key = {api.id} api = {api}/>)
  

  return (
    <ul className="grid-container">
      {renderApis}
      </ul>
  );
}

export default Container;