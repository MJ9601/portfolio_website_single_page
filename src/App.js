import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import { useEffect, useState, useContext } from "react";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const data = await fetchData();
      setData(data);
    };
    getdata();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/items");
    const data = await res.json();
    return data;
  };
  const context = useContext(ThemeContext);
  const darkMode = context.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode && "#222",
        color: darkMode && "#999",
      }}
    >
      <Toggle />
      <Hero />
      <About />
      <Gallery data={Data} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
