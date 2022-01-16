import { useState } from "react";
import logo from "./logo.svg";
import Modal from "./components/Modal/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setIsOpen(true)}>
          Click to Open Modal
        </button>

        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          This is Modal Content!
        </Modal>
      </header>
    </div>
  );
}

export default App;