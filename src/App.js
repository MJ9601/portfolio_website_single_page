import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [Data, setData] = useState([]);
  const [OAuth, setOAuth] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const data = await fetchData();
      const oAuth = await fetchOauth();
      setOAuth(oAuth);
      setData(data);
    };
    getdata();
  }, []);

  // fetch functions
  const fetchOauth = async () => {
    const res = await fetch("http://localhost:5050/oauth");
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/items");
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery data={Data} />
      <Contact OAuth2={OAuth[0]} />
      <Footer />
    </div>
  );
}

export default App;
