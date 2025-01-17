import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition}</p>
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
