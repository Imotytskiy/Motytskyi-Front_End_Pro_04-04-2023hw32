import React, { useState } from "react";
import Button from "../Button/Button";
const smiles = [
  {
    id: "1",
    smile: "😁",
    vote: 0,
  },
  {
    id: "2",
    smile: "😃",
    vote: 0,
  },
  {
    id: "3",
    smile: "😄",
    vote: 0,
  },
  {
    id: "4",
    smile: "😅",
    vote: 0,
  },
  {
    id: "5",
    smile: "😆",
    vote: 0,
  },
];
export default function Smilelist() {
  const [data, setData] = useState(smiles);

  const smileClick = (smilesId) => {
    const cloneData = [...data];
    const smiles = cloneData.find((p) => p.id === smilesId);
    if (smiles) {
      smiles.vote += 1;
      setData(cloneData);
    }
  };
  const maxVote = Math.max(...data.map((smile) => smile.vote));
  return (
    <div className="Smilelist">
      <h1>SMILES</h1>
      {data.map((smiles) => (
        <p className="Smile" key={smiles.id}>
          {smiles.smile}
          <button className="Vote-Button" onClick={() => smileClick(smiles.id)}>
            {smiles.vote}
          </button>
        </p>
      ))}
      <Button maxVote={maxVote}>WHO IS WINNER</Button>
    </div>
  );
}
