// import React from 'react';
import axios from "axios";

export const getApi = async (term) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/${term}`);
};
// https://jsonplaceholder.typicode.com
