import React from 'react';

const GifGridItem = ({img}) => {

    // console.log(img)

  return (
    <div className="m-1 pointer animate__fadeInLeft animate__fadeInDown">
        <img className="animate__fadeInDown" src={img.image} alt={img.title} width={100} height={100}/>
    </div>
  )

}

export default GifGridItem;
