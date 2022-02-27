import React, { useState } from 'react'
import PropTypes from 'prop-types';
import swal from 'sweetalert';


const AddCategory = ({setcategories}) => {

  const [InputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    // e.target.value contain the most uptaded information about the input
    setInputValue( e.target.value );
  }

  const handleSetCategory = (oldArray, category) => {
    if (!category) {

        swal({
            title: "Error",
            icon: "error",
            text: "Debes ingresar un texto",
            allowOutsideClick: false,
            allowEnterKey: false,
            allowEscapeKey: false
        })

        setInputValue("")
        return [...oldArray];
    } else {
        const existe = oldArray.find(categoryValue => categoryValue === category);

        setInputValue("")
        return existe ? [...oldArray] : [...oldArray, category];
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setcategories( args => handleSetCategory(args, InputValue));
    // console.warn('some form was submitted but nothing happened')
  }

  return (
    <div className="bg-dark">

        <div className='my-2 p-3 d-flex text-white'>
          <div>Your search:</div>
          <div>{ InputValue }</div>
        </div>

        <div className="my-2 p-3">
          <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ InputValue }
                onChange={ handleChange }
                className="form-control"
                placeholder="Type some text here, please..."
            />
          </form>
        </div>
    </div>
  )
}

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired
}


export default AddCategory