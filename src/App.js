import react from './react.svg';
import Card from "./components/card/Card"
import "./App.css"

function App() {
  return (
    <div className="container">
      <div className="logo-div">
        <img className="logo" src={react} alt="" />
      </div>
      <div className="cards-container">
        <h5 className="cards-title">Languages</h5>
        <Card />
      </div>
    </div>
  )
}

export default App;
