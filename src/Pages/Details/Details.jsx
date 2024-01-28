import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './details.css'
import Header from '../../components/Header/Header';
const Details = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    // Fetch watch details based on the provided ID
    fetch(`http://localhost:3031/watches/${id}`)
      .then(response => response.json())
      .then(data => setWatch(data))
      .catch(error => console.error('Error fetching watch details:', error));
  }, [id]);

  return (
    <>
        <Header/>
            <div className="details-page">
        {watch ? (
            
            <div className="watch-details">
                
            <img src={watch.imgUrl} alt={watch.name} />
            <h2>{watch.brand} - {watch.name}</h2>
            <p><strong>Price:</strong> ${watch.price}</p>
            <p><strong>Description:</strong> {watch.description}</p>
            
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    </>
    
  );
};

export default Details;
