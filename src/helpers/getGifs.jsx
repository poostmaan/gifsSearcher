export const getGifs = async ( category ) => {

    // Los helpers son archivos con funciones que podran recibir argumentos o datos
    // y retornar datos procesados

    const api_key = 'A3wd6DT9oz7fLHMCrw1jRVxdk3a0OhAz';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${category}`;
    const res = await fetch(url)

    const { data } = await res.json()
    // console.log(data)
    const img = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        image: img.images.fixed_height_small.url
      }
    })
    // console.log(data)
    // console.log(img);
    // setImages(img);
    return img;

}