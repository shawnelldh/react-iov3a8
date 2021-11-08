import React from "react";
import "./style.css";
import Header from "./components/Header";
import NotesPage from './pages/NotesPage'


export default function App() {
  return (
    <div className="App">
     <Header/>
     <NotesPage />
     
    </div>
  );
}

export default App;