import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import DataFetcher from './components/DataFetcher';
import SlideShow from './components/SlideShow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto p-6">
        <Register />
        <Login />
        <div className="my-8">
          <DataFetcher />
        </div>
        <SlideShow />
      </div>
    </div>
  );
}

export default App;
