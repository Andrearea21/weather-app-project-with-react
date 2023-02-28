import "./App.css";
import "bootstrap";
import Weather from "./Weather";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <div>
          <Weather defaultCity="London" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
