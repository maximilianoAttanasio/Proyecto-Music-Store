import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CarritoProvider from "./context/CarritoProvider";

function App() {
  return (
    <>
      <CarritoProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </CarritoProvider>
    </>
  );
}

export default App;
