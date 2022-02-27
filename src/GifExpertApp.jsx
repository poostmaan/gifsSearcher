import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

  const [categories, setcategories] = useState([]);

  // const handleClick = ( ) => {
  //   setcategories( [...categories, anime] )
  // }
  // const addanime = ( anime ) => {
  //   setcategories( [...categories, anime] )
  // }

  return (
    <div>
        <h2>Gifs searcher</h2>
        <hr />
        <AddCategory key="1" setcategories={ setcategories } />
        <ol>
            {
                categories.map((category) => {
                    // Segun Fernando es mejor colocar como key el propio id de la categoria
                    // Ya que si se usa el index por defecto del map, esto podria llegar
                    // a ocasionar problemas al ser muy volatil
                    return (
                      <>
                      <h5>{category}</h5>
                      <GifGrid key={category} category={category} />
                      </>
                    )
                })
            }
        </ol>
    </div>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp;