import { useState, useEffect } from "react";
import { uploadFile } from "../helpers/uploadFile";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data:[], 
    loading: true
  });
  useEffect(() => {
    getGifs(category)
      .then( img => {
          setstate({
            data: img, 
            loading: false
        });
      })
  }, [ category ]);

  return state;
};