import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Esto permitira ejecutar la consulta fetch solo una vez,
  // Cuando el componente finalmente sea renderizado
  
    useEffect(() => { 
        getGifs(category)
        .then( img => {
            setState({
                data: img,
                loading: false
            });
        });
    }, [category]);


    return state;
}
