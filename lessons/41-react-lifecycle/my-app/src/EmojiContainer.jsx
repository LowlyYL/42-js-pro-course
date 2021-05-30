import EmojiRow from "./EmojiRow";

const EmojiContainer = (props) => {
  return (
    <div>
      {props.emojiFilter.map((item, index) => {
        return <EmojiRow key={index} symbol={item.symbol} title={item.title} />;
      })}
    </div>
  );
};

export default EmojiContainer;