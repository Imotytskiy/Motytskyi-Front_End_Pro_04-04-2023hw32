import React, { useState } from "react";
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
let maxVote = [];
export default function Smilelist() {
  const [data, setData] = useState(smiles);

  const smileClick = (smilesId) => {
    const cloneData = [...data];
    const smiles = cloneData.find((p) => p.id === smilesId);
    if (smiles) {
      smiles.vote += 1;
      setData(cloneData);
      maxVote = Math.max(...cloneData.map((smile) => smile.vote));
    }
  };

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
    </div>
  );
}
