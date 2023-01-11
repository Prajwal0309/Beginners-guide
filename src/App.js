import React, { useState } from "react";
import "./styles.css";

const buttonList = ["CPROGRAMMING", "PYTHON", "JAVA"];

const list = {
  CPROGRAMMING: {
    tools: ["Coderbyte", "HackerRank", "W3Schools"],
    ratings: ["5/5", "4.5/5", "4.5/5"]
  },

  PYTHON: {
    tools: ["SoloLearn", "Programiz", "CodeCademy"],
    ratings: ["5/5", "4.5/5", "4.5/5"]
  },

  JAVA: {
    tools: ["Udemy", " Pluralsight", "CodeAbbey"],
    ratings: ["5/5", "4.5/5", "4.5/5"]
  }
};

export default function App() {
  const [listName, setlistName] = useState("JAVA");

  return (
    <div className="header">
      <h1>WEBSITES FOR THE BEGINNER PROGRAMMERS</h1>

      {buttonList.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => setlistName(item)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "5px solid chartreuse",
              margin: "1rem 5rem"
            }}
          >
            {item}
          </button>
        );
      })}

      <hr />

      <ul>
        {list[listName].tools.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 10rem",
                borderRadius: "0.5rem",
                color: "yellow"
              }}
            >
              {item}
              <span> {list[listName].ratings[index]} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
