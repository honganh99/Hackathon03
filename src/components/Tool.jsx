import React from "react";

function Tool({ text }) {
  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return 0;
    }
    const words = trimmedText.split(/\s+/);
    return words.length;
  };

  const countCharacters = (text) => {
    return text.replace(/\s/g, "").length;
  };

  const countParagraphs = (text) => {
    const paragraphs = text.split(/\n/);
    return paragraphs.length;
  };
  return (
    <div className="word_counter_tool">
      <ul>
        <li>
          <i className="fa-regular fa-pen-to-square" />
          Word count:{countWords(text)}
        </li>
        <li>
          <i className="fa-regular fa-envelope" />
          Letter count:{countCharacters(text)}
        </li>
        <li>
          <i className="fa-regular fa-newspaper" />
          Paragraph count:{countParagraphs(text)}
        </li>
      </ul>
    </div>
  );
}

export default Tool;
