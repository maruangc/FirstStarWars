import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Characters = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  console.log(params);
  // const items = store.array.find((item) => item.uid == params.uid);

  return <div>{params.uid}</div>;
};
