import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Servicios from "./components/Servicios/Servicios";
import Ofertas from "./components/Ofertas/Ofertas";
import Proyectos from "./components/Proyectos/Proyectos";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Servicios />
      {/* <Ofertas /> */}
      {/* <Proyectos /> */}
      <Nosotros />
      <Contacto />
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
