import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

const SlideShow = () => {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded shadow-md">
      <div className="reveal">
        <div className="slides">
          <section className="p-8 bg-white rounded shadow-sm">
            <h1 className="text-4xl font-bold mb-4">Judul Slide</h1>
            <p className="text-xl text-gray-700 mb-4">Sub Judul</p>
            <img src="gambar.jpg" alt="Gambar" className="mx-auto mb-4" />
            <aside className="text-gray-600 italic">Catatan Slide</aside>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
