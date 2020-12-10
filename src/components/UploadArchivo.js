import React from "react";
import { useForm } from 'react-hook-form';
import { uploadFile } from "../helpers/uploadFile";
import { validateFile } from "../helpers/validators";

export const UploadArchivo = ({ state, setstate }) => {

    const {register, errors, handleSubmit} = useForm();
    
    const onSubmit = async (data) => {
        setstate({
            ...state,
            data: [],
            loading: true, 
            error: false
         })
        const res = await uploadFile(data);
        console.log(res);
        if (res === false){
          setstate({
            archivo: null,
            loading: false, 
            data: [],
            error: true
          })
        } 
        else {  
        setstate({
            archivo: data,
            data: res.split(' '),
            loading: false, 
            error: false
         })
        }

    }
    
  return (
    <div className="container p-4">
      <form >
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-10 mb-3">
            <span className="text-danger text-small d-block mb-2">
              {errors.formFile && errors.formFile.message}
              {state.error && "El archivo no ha podido ser procesado..."}
            </span>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "Debe proporcionar un archivo",
                },
                validate: validateFile,
              })}
              className="form-control"
              type="file"
              name="formFile"
              onChange = {handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </form>
      {state.loading && <h1>Cargando...</h1>}

    </div>
  );
};
