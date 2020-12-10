import React, {useState} from 'react';
import { SeleccionarAlgoritmo } from './SeleccionarAlgoritmo';
import { Variables } from './Variables';


export const Opciones = ({ state }) => {

  const [boton, setBoton ] = useState ("0");

  const handleChange = ({ target }) => { 
    setBoton(target.name);
  }
    return (
      <div className="container">
        <div className="row">
          <p>
            Selecciona el algorimo que deseas implementar y la variables que
            deseas utilizar
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="button" className="btn btn-primary btn-sm  btn-block" onClick = {handleChange} name="1">
              Variables
            </button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-primary btn-sm  btn-block" onClick = {handleChange} name="2">
              Algoritmo
            </button>
          </div>
        </div>

        { boton === "1" && (
          <div className="row p-4">
            <Variables lista={state.data}/>
          </div>
        )}

        { boton === "2" && <SeleccionarAlgoritmo state={state}/>}

        
      </div>
    );
}
