import React from "react";
import ApiCard from "./ApiCard";


function Container({showApis, selectedCategory}) {
  // const renderApis = showApis.map((api) => <ApiCard key = {api.id} api = {api}/>)
  let filtered = undefined
    if (selectedCategory) {
     filtered = selectedCategory.map((cate) => <ApiCard key = {cate.id} api = {cate}/>)
  }
  const displayAll = showApis.map((api) => <ApiCard key = {api.id} api = {api}/>)


  

  return (
    <ul className="grid-container">
      {filtered ? filtered : displayAll}
      </ul>
  );
}

export default Container;