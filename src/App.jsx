import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
