import React, { useEffect, useState } from 'react';
import { WatchCard } from '../../components/WatchCard/WatchCard';
import './watches.css';
import axios from 'axios';
import Header from '../../components/Header/Header';

const ITEMS_PER_PAGE = 3;

export const Watches = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/watches")
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        <Header/>
      <div className="watch-list">
        {currentItems.map((watchData, index) => (
          <WatchCard key={index} data={watchData} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / ITEMS_PER_PAGE) }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
