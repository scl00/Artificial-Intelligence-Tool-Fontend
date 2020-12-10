import React, { useState } from 'react';
import { Opciones } from './Opciones';
import { UploadArchivo } from './UploadArchivo';


export const Algoritmos = () => {

  const [state, setstate] = useState({
    archivo: null,
    data:[], 
    loading: false, 
    error: false
  });


    return (
      <>
        <h1>Algoritmos</h1>
        <UploadArchivo state={state} setstate={setstate}/>

      { state.archivo != null && <Opciones state={state}/>}
      
      
        {/* <div className="container p-4">
          <h1>Algoritmos</h1>
          <div className="row align-items-center">
            <div className="col-9 mb-3">
              <input
                className="form-control"
                type="file"
                name="formFile"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-3">
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={handleInputChange}
                name="algoritmo"
              >
                <option value>Seleccionar algoritmo</option>
                <option value="1">Apriori</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          onChange={handleInputChange}
          name="algoritmo"
        >
          <option value>Seleccionar algoritmo</option>
          <option value="1">Apriori</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {values.algoritmo === "1" ? <Apriori /> : <p>Nada</p>} */}
      </>
    );
}
