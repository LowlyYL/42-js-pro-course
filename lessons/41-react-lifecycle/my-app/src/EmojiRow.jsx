const EmojiRow = (props) => {
  const codePointHex = props.symbol.codePointAt(0).toString(16);
  return (
    <div className="containerEmoji">
      <img
        src={`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`}
      />
      <span>{props.title}</span>
    </div>
  );
};

export default EmojiRow;