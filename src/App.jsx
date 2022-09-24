
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting="Bienvenido a percumundo la plataforma por excelencia en venta de instrumentos y accesorios para percusionistas" />
    </div>
  );
}

export default App;
