import { useState } from "react";

function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = (index) => {
    //   setScores((prevScore) => {
    //   const copy = [...prevScore];
    //   copy[index] += 1;
    //   return copy;
    // });

    //MORE REACT WAY
    setScores((prevScore) => {
        
      return prevScore.map((score, i) => {
        if (i === index) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
    
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              <span>
                Player-{index + 1}: {score}
              </span>
                  <button onClick={() => incrementScore(index)}>+1</button>
                  {score >= target && "WINNER"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ScoreKeeper;
