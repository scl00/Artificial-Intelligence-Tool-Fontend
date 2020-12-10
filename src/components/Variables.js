import React from 'react'

export const Variables = ({ lista }) => {
    const variables = []
    var j = 0;

    for (var i= 0; i < lista.length; i = i + 2){
        j++;
        variables.push(
            <tr key={j}>
            <th scope="row">{j}</th>
            <td >{lista[i]}</td>
            <td >{lista[i+1]}</td>
            <td>
                <div className="form-check">
                <input type="checkbox" name={j-1} defaultChecked/>
                </div>
            </td>
            </tr>
        )
    }

    
    return (
      <div className="container align-items-center">
        <div className="row align-items-center">
          <div className="col-2"></div>
          <div className="col-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Variable</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Seleccionar</th>
                </tr>
              </thead>
              <tbody>{variables}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
