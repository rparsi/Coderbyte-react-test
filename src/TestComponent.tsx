import { useState } from 'react';

type Word = {
  value: string;
  className: string;
}

function TestComponent() {
  const [underlinedWords, setUnderlinedWords] = useState("");
  const [boldedWords, setBoldedWords] = useState("");
  const [redWords, setRedWords] = useState("");
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis. Pellentesque suscipit elit a elit dignissim, ornare mattis libero convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dictum augue, nec consectetur enim. Pellentesque quis quam ultricies, volutpat nulla sit amet, egestas est. Praesent accumsan ante non dui sollicitudin convallis. Etiam facilisis finibus lectus, euismod gravida ipsum ultricies at.";

  const words = paragraph.split(" ");

  const getCssPerWord = (): Word[] => {
    const cssPerWord = [];

    for (let i = 0;i < words.length;i++) {
      const intendedWord = words[i].replace(/[^a-zA-Z0-9 ]/g, '');

      let className = 'word ';

      if (underlinedWords.includes(intendedWord)) {
        className += "underlined ";
      }
      if (boldedWords.includes(intendedWord)) {
        className += "bolded ";
      }
      if (redWords.includes(intendedWord)) {
        className += "red";
      }

      cssPerWord.push({value: words[i], className: className} as Word);
    }
    return cssPerWord;
  };

  const createWordElement = (word: Word): JSX.Element => {
    return (
      <>
      <div className={word.className}>{word.value}</div>&nbsp;
      </>
    );
  };

  return (
    <>
    <form>
      Underlined: &nbsp;<input type="text" name="underlined" size="100" value={underlinedWords} onChange={(event) => {setUnderlinedWords(event.target.value)}} /> <br/>
      Bolded: &nbsp;<input type="text" name="bolded" size="100" value={boldedWords} onChange={(event) => {setBoldedWords(event.target.value)}} /><br />
      Red: &nbsp;<input type="text" name="red" size="100" value={redWords} onChange={(event) => {setRedWords(event.target.value)}} /> <br />
    </form>
    <div>
      {
        getCssPerWord().map((item) => createWordElement(item))
      }
    </div>
    </>
  );
}

export default TestComponent;