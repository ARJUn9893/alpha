import { MathJaxContext } from 'better-react-mathjax';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';



const quesId = [
  "AreaUnderTheCurve_901",
  "BinomialTheorem_901",
  "DifferentialCalculus2_901"
];

function App() {
  const [ques, setQues] = useState([]);
  const [flag, setFlag] = useState(false);
  const data = async (val) => {
    fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${val}`)
      .then((res) => res.json())
      .then((result) => { setQues((pre) => [...pre, result[0]]); setFlag(true); })
      .catch((err) => { console.log(err) });
  }

  useEffect(() => {
    quesId.forEach((val) => {
      data(val);
    })
  }, []);

  return (
    <>
      <Navbar />
      <MathJaxContext>
      {flag && <Home data={ques} />}
      </MathJaxContext>
    </>
  );
}

export default App;
