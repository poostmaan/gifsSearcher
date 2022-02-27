import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  // const [Images, setImages] = useState([]);
  
  const { data, loading } = useFetchGifs(category);

  // getGifs();

  return (
    <div className="d-flex justify-content-center">
        <div className="d-flex">
         


          {
            loading ? 'Cargando' :
            
            data.map(( img ) => {
              // return <li key={id}>{title}</li>
              return <GifGridItem key={img.id} img={img} />
            })
          }
        </div>
    </div>
  )
}

// GifGrid.propTypes = {}

export default GifGrid