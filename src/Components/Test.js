import { MathJax } from 'better-react-mathjax'
import React, { useState } from 'react'

const Test = (props) => {
    const data = props.data;
    // console.log(props.data)

    const [question, setQuestion] = useState(data[0].Question);
    const [current, setCurrent] = useState(0);

    const Previous = () => {
        let idx = current - 1;

        setQuestion(data[idx].Question);
        setCurrent(idx);

    }

    const Next = () => {
        let idx = current + 1;
        if (idx < 3) {
            setQuestion(data[idx].Question);
            setCurrent(idx);
        }
    }

    return (
        <>
            <div className="box">
                <div className="container mt-3">
                    <div className="card testCard ">
                        <div className="card-header d-flex justify-content-between">
                            <span>Question no: {current + 1}</span>
                            <span>Total Question: 3</span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <MathJax>
                                    {question}
                                </MathJax>
                            </p>

                        </div>
                        <div className="card-footer  d-flex justify-content-between">
                            <button type="button/rest" className={`btn btn-outline-primary ${current === 0 ? "disabled" : ""}`} onClick={Previous} > &laquo; Previous </button>
                            <button type="button" className={`btn btn-outline-primary ${current === 2 ? "disabled" : ""} `} onClick={Next} > Next &raquo; </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test
