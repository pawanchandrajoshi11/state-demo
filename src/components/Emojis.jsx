import { useState } from "react";
import { v4 as uuid } from "uuid";

const randomEmojis = () => {
  const choices = ["😝", "🥹", "😎", "🤩", "😂", "😱", "🥵"];
  return choices[Math.floor(Math.random() * choices.length)];
};

function Emojis() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmojis() }]);
  const insertEmojis = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmojis() },
    ]);
  };

  const deleteEmojis = (id) => {
    setEmojis((prevEmojis) => prevEmojis.filter((e) => e.id !== id));
  };

  function makeHearts() {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  }

  return (
    <div>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmojis(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={insertEmojis}>Add Emoji</button>
      <br />
      <button onClick={makeHearts}>Make them all HEARTS</button>
    </div>
  );
}

export default Emojis;
