import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

 useEffect(() => {
   getData();
 }, [])

 const getData = () => {
  axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      console.log(res);
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err);
    })

 }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getData={getData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
