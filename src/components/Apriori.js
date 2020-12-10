import React from 'react';
import { useForm } from 'react-hook-form';
// import { apriori } from '../helpers/apriori'

export const Apriori = ({state}) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = () => {
        console.log("hola")
    }

    // const ejecutar = async () => {
    //     console.log(state.data);
    //     const res = await apriori(state.archivo);
    //     console.log(res);
    // }

    return (
      <div>
        <h1>Apriori</h1>
        <div className="row align-items-center p-2">
          <div className="col-3">
            <label htmlFor="exampleDataList" className="form-label">
              Soporte mínimo
            </label>
          </div>
          <div className="col-5">
            <input
              className="form-control"
              type="text"
              placeholder="Soporte mínimo"
              name="min_support"
              ref={register({
                    pattern: {
                        value: /[0]*\.[0-9]+/, 
                        message: 'Se debe introducir un número decimal'
                    }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.min_support && errors.min_support.message}
            </span>
          </div>
        </div>
        <div className="row align-items-center p-2">
          <div className="col-3">
            <label htmlFor="exampleDataList" className="form-label">
              Confianza
            </label>
          </div>
          <div className="col-5">
            <input
              className="form-control"
              type="text"
              placeholder="Confianza"
              name="min_confidence"
              ref={register({
                    pattern: {
                        value: /[0]*\.[0-9]+/, 
                        message: 'Se debe introducir un número decimal'
                    }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.min_confidence && errors.min_confidence.message}
            </span>
          </div>
        </div>
        <div className="row align-items-center p-2">
          <div className="col-3">
            <label htmlFor="exampleDataList" className="form-label">
              Elevación
            </label>
          </div>
          <div className="col-5">
            <input
              className="form-control"
              type="text"
              placeholder="Elevación"
              name="min_litf"
              ref={register({
                    pattern: {
                        value: /[0]*\.[0-9]+/, 
                        message: 'Se debe introducir un número decimal'
                    }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.min_litf && errors.min_litf.message}
            </span>
          </div>
        </div>
        <div className="row align-items-center p-2">
          <div className="col-3">
            <label htmlFor="exampleDataList" className="form-label">
              Mínimo de elementos
            </label>
          </div>
          <div className="col-5">
            <input
              className="form-control"
              type="text"
              placeholder="Mínimo de elementos"
              name="min_length"
              ref={register({
                    pattern: {
                        value: /[0-9]+/, 
                        message: 'Se debe introducir un número entero'
                    }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors.min_length && errors.min_length.message}
            </span>
          </div>
        </div>
            <div className="row">
            <button type="button" className="btn btn-primary btn-sm  btn-block" onClick = {handleSubmit(onSubmit)} name="2">
              Enviar
            </button>
        </div>
        {/* <div className="row p-4">
            <button type="button" className="btn btn-primary btn-sm  btn-block" onClick = {ejecutar} name="2">
              Este si
            </button>
        </div> */}

        
      </div>
    );
}
