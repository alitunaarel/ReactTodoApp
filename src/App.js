import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura Ode", tamamlandi: true }
];

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = title => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
    setYeniBaslik("");
  };

  const markCompleted = id => {
    setListe(
      liste.map(el =>
        el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    );
  };

  const clearCompleted = () => {
    setListe(liste.filter(item => !item.tamamlandi));
  };

  return (
    <div className="App">
      <h1> Yapilacaklar Listesi </h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={e => setYeniBaslik(e.target.value)}
          placeholder="Listeye ekle"
        ></input>
        <button onClick={() => addNew(yeniBaslik)}>Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.tamamlandi ? "yapildi" : "yapilmadi"}
          >
            {item.baslik}{" "}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="temizle">
        Tamamlananlari Temizle
      </button>
    </div>
  );
}
//  dakikada kaldik4:00
export default App;
