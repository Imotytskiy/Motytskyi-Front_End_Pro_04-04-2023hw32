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
  const [winnerSmile, setWinnerSmile] = useState(null);

  const smileClick = (smilesId) => {
    const cloneData = [...data];
    const smile = cloneData.find((p) => p.id === smilesId);
    if (smile) {
      smile.vote += 1;
      setData(cloneData);
    }
  };

  const maxVote = Math.max(...data.map((smile) => smile.vote));
  const smileWithVoteNine = data.find((smile) => smile.vote === maxVote);

  return (
    <div className="Smilelist">
      <h1>{winnerSmile ? `ПЕРЕМОЖЕЦЬ: ${winnerSmile.smile}` : "SMILES"}</h1>
      {data.map((smile) => (
        <p className="Smile" key={smile.id}>
          {smile.smile}
          <button className="Vote-Button" onClick={() => smileClick(smile.id)}>
            {smile.vote}
          </button>
        </p>
      ))}
      <Button onClick={() => setWinnerSmile(smileWithVoteNine)}>
        SHOW RESULT
      </Button>
    </div>
  );
}
