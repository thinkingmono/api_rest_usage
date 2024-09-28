import { useEffect, useState } from "react"


const CatGalleryFetch = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');

      if (!response.ok) {
        throw new Error(`There was an error fetching the data.`);
      }

      const data = await response.json();

      console.log(data);

      setCats(data);

    } catch (error) {
      console.log(`There was an error ${error}`);
      setError(`There was an error sending the request`);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (error) {
    return <div className="alert alert-danger text-center" role="alert">
      <h2>{error}</h2>
    </div>
  }

  return (
    <div className="container mt-5">
      <h2 className='text-center text-white mb-4'>Galería de Gatitos con Fetch</h2>
      <div className="vh-80 row">
        {cats.map((cat, index) => {
          return (
            <div key={cat.id} className="col-md-4 mb-4 mr-2 col-4">
              <div className="card">
                <img src={cat.url} alt="Cat" className="card-img-top img-fluid object-fit-cover" />
                <div className="card-body">
                  <h5 className="card-title">Gato {index + 1}</h5>
                  <p className="card-text">Un gato de nuestra galería</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CatGalleryFetch