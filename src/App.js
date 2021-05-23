import Devices from './components/devices';
import Footer from './components/footer';
import Header from './components/header';
import Loader from './components/loader';
import Introduction from './components/introduction';
import React, { useState, useEffect } from 'react';

function App() {

  const [loading, setLoading] = useState(false);
  const [dataResponse, setDataResponse] = useState({});

  useEffect(() => {
    setLoading(true);
      fetch("https://posts-test-sting.vercel.app/api")
      .then((response) => response.json())
      .then((json) => {
        setDataResponse(json);
        setLoading(false);
      })      
  }, []);

  

  return (
    <>
      {loading ? <Loader /> : ""}
      <Header />
      <Introduction dataResponse={dataResponse}/>
      <Devices dataResponse={dataResponse}/>
      <Footer />
    </>
  );
}

export default App;
