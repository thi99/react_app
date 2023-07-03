import logo from './logo.svg';
import './App.css';
import Demo from './demo';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from "jquery";
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
    <Header />
    <section className="section">
    <div className="container">
    <Product/>
    </div>
    </section>
    </div>
    );
  }

  export default App;
