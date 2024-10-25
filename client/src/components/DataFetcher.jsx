import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/slides', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6">Slides</h2>
      <ul className="space-y-4">
        {data.map((slide, index) => (
          <li key={index} className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <h3 className="text-xl font-semibold">{slide.title}</h3>
            <p className="text-gray-600">{slide.subtitle}</p>
            {slide.image && <img src={slide.image} alt="slide" className="mt-4" />}
            <p className="mt-4">{slide.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
