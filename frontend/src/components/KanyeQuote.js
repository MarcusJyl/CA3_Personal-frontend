import kanyeFacade from "../facades/fetchKanye";
import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Kanye() {
  const [dataFromServer, setDataFromServer] = useState({ isEmpty: true });
  useEffect(() => {
    kanyeFacade.fetchData().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div className="content">
      <h1 className="Kanye">Lord Kanye says:</h1>
          <h3 className="Kanye">{dataFromServer.quote}</h3>
     </div>
  );
}