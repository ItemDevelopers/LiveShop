import './App.css';
import StCard from './common/card/stCard';
import img from "./assets/img/Graphic.jpg"
import NdCard from './common/card/ndCard';


function App() {
  return (
    <div className="App">
      <NdCard title="Acer A210" img={img} text="lorem ipsum dolor sit amet koret naret boret varet nice sdfs sdfe asde asfetf bruh wad nvsd sdf ew awe few  fewf trefge hrhu hhiubih iuhiuh" oldCost="$1.300" cost="$1.000" sale="$1.000"/>
    </div>
  );
}

export default App;
