import React, {useState} from 'react'
import { Apriori } from './Apriori';
import { Pearson } from './Pearson';

export const SeleccionarAlgoritmo = ({ state }) => {

    const [select, setSelect] = useState ("0");

    const handleChage = ({ target }) => {
        setSelect(target.value)
    }

    return (
      <div className="container p-4">
        <div className="row p-4">
          <div className="col-3">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              name="algoritmo"
              onChange = {handleChage}
            >
              <option value>Seleccionar algoritmo</option>
              <option value="1">Apriori</option>
              <option value="2">Correlación de Pearson</option>
              <option value="3">Otro algoritmo</option>
            </select>
          </div>
        </div>
        {select === "1" && <Apriori state={state}/>}
        {select === "2" && <Pearson/>}
      </div>
    );
}
