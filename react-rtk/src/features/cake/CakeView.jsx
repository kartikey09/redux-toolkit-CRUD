import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
    const numOfCakes = useSelector(state=> state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <>
      <h2>Num Of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order cake</button>
      <button onClick={()=>dispatch(restocked(3))}>Restock cakes</button>
    </>
  );
};
