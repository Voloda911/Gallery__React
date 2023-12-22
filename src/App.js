import React, { useState } from "react";
import Invit from "./Invit";
import Galere from "./Components/Galere";
// import Collections from "./Components/Galere/Collections";

// function Result({ correct }) {
//   return (
//     <div className="result">
//       <div className="img">
//         <img src="https://emojio.ru/images/apple-b/1f389.png"></img>
//         <h1>
//           your result is {correct} of {questions.length}
//         </h1>
//         <a href="/"> try again</a>
//       </div>
//     </div>
//   );
// }
// const questions = [
//   {
//     title: "react - it..",
//     variants: ["freemwork", "biblioteca", "application"],
//     correct: 1,
//     id: 1,
//   },
//   {
//     title: "compontnts - it..",
//     variants: ["freemwork", "i'm good", "biblioteca"],
//     correct: 2,
//     id: 2,
//   },
//   {
//     title: "JSX - it...",
//     variants: ["freemwork", "i'm good", "freemwork"],
//     correct: 1,
//     id: 3,
//   },
//   {
//     title: "react - it..",
//     variants: ["", "", ""],
//     correct: 1,
//     id: 4,
//   },
// ];

// function Game({ step, question, onclickVariant }) {
//   // Вычисляем процент прогресса
//   const procant = (step / questions.length) * 100;

//   return (
//     <div className="game">
//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${procant}%` }}></div>
//       </div>
//       <h1>{question.title}</h1>
//       <ul>
//         {question.variants.map((text, index) => (
//           <li onClick={() => onclickVariant(index)} key={index}>
//             {text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  // const question = questions[step];

  // const onclickVariant = (index) => {
  //   setStep(step + 1);
  //   if (index === question.correct) {
  //     setCorrect(correct + 1);
  //   }
  // };
  return (
    <div className="app">
      <Galere />
      {/* <Invit /> */}
      {/* <div className="content">
        {step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onclickVariant={onclickVariant}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div> */}
    </div>
  );
}
export default App;

{
  /* <svg
  width="600"
  height="200"
  viewBox="0 0 600 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="10"
    y="10"
    width="180"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />
  <rect
    x="200"
    y="10"
    width="180"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />{" "}
  <rect
    x="200"
    y="10"
    width="180"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />{" "}
  <rect
    x="200"
    y="10"
    width="180"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />{" "}
  <rect
    x="200"
    y="10"
    width="180"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />
  <rect
    x="10"
    y="60"
    width="120"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />
  <rect
    x="140"
    y="60"
    width="120"
    height="40"
    fill="none"
    stroke="black"
    stroke-width="4"
  />
</svg>; */
}
