import react from './react.svg';
import Card from "./components/card/Card"
import "./App.css"

function App() {
  return (
    <div className="app">
      <img className="logo" src={react} alt="" />
      <Card />
    </div>
  );
}

export default App;
