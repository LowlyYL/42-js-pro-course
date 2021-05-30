import { useEffect, useState } from "react";
import EmojiContainer from "./EmojiContainer";
import './Form.css';

const Form = () => {
  const [emoji, setEmoji] = useState([]);
  const [emojiFilter, setEmojiFilter] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/asimonok/42-js-pro-course/lesson/41-react-lifecycle/lessons/41-react-lifecycle/emojiList.json")
      .then((res) => res.json())
      .then((res) => setEmoji(res));
  }, []);

  const inputHandler = (e) => {
    setEmojiFilter(
      emoji.filter(
        (item) =>
          item.title.includes(e.target.value.toLowerCase()) ||
          item.keywords.includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="entry emoji"
      />
      <EmojiContainer
        emojiFilter={emojiFilter.length >= 15 ? emojiFilter.slice(0, 15) : emojiFilter}
      />
    </div>
  );
};

export default Form;