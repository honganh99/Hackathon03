import React from "react";
import Tool from "./Tool";
import Footer from "./Footer";

function WordCounter() {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const handleLowercaseClick = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  return (
    <div className="word_counter">
      <h3>
        <i className="fa-solid fa-house" />
        Word Counter
      </h3>
      <Tool text={text} />
      <Footer
        text={text}
        handleTextChange={handleTextChange}
        handleUppercaseClick={handleUppercaseClick}
        handleLowercaseClick={handleLowercaseClick}
      />
      {""}
    </div>
  );
}

export default WordCounter;
