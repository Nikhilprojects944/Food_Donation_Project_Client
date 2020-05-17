import React from "react";
import { useState, useEffect } from "react";

function SampleFetchApi() {
  const [person, setPerson] = useState(null);
  const [person1, setPerson1] = useState(null);

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    console.log(data);
    const [items] = data.results;
    const item = data.info;
    setPerson(items);
    console.log(items);
    setPerson1(item);
    console.log(item);
  }, []);

  return (
    <div>
      <p>you clicked</p>
      {person && <div>{person.name.first}</div>}
      {person && <div>{person.name.title}</div>}
      {person && <div>{person.gender}</div>}
      {person1 && <div>{person1.seed}</div>}
    </div>
  );
}

export default SampleFetchApi;
