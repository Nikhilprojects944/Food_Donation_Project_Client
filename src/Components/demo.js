import React from "react";
import { useState, useEffect } from "react";

function demo() {
  const [person, setPerson] = useState(null);

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [items] = data.results;
    setPerson(items);
  }, []);

  return (
    <div>
      <p>you clicked</p>
      {person && <div>{person.name.first}</div>}
    </div>
  );
}

export default demo;
