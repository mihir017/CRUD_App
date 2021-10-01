// import React from "react";
import { getApi } from "./ApiFetch";

export const StorageAPIData = async () => {
  const response = await getApi("comments");

  //   console.log(localStorage.getItem("commentList"));
  //   return response;
  if (!localStorage.getItem("commentList")) {
    localStorage.setItem(
      "commentList",
      JSON.stringify(response.data.slice(0, 10))
    );
  }
  //   return JSON.parse(localStorage.getItem("commentList"));
};

export const StoreData = (commentData) => {
  console.log(commentData);
  localStorage.setItem("commentList", JSON.stringify(commentData));
};

export const GetData = () => {
  return JSON.parse(localStorage.getItem("commentList"));
};
