import React from "react";

function Footer({
  text,
  handleTextChange,
  handleUppercaseClick,
  handleLowercaseClick,
}) {
  return (
    <div>
      <textarea
        type="text"
        placeholder="Enter/Paste Your Text Here"
        defaultValue={""}
        name=""
        id=""
        cols="100"
        rows="10"
        value={text}
        onChange={handleTextChange}
      />
      <div className="word_counter_footer">
        <button onClick={handleUppercaseClick}>Click to Uppercase</button>
        <button onClick={handleLowercaseClick}>Click to Lowercse</button>
      </div>
    </div>
  );
}

export default Footer;
