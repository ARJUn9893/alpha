import { MathJax } from 'better-react-mathjax';
import React, { useState } from 'react'
import Test from './Test';

const Home = (props) => {

    const [flag, setFlag] = useState(false);

    const testHandle = () => {
        setFlag(true);
    }

    return (
        <>
            <MathJax>
                {flag && <Test data={props.data} />}
            </MathJax>

            <div className={`container mt-3 ${flag && "d-none"}`}>
                <div className="card text-center">
                    <div className="card-header">
                        <h5>Test</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Mathematics</h5>
                        <h6 className="card-text">There are total three questions.</h6>
                        <div>
                            <p className='m-0'>1. Area under the curve</p>
                            <p className='m-0'>2. Binomial Theorem</p>
                            <p className='m-0 mb-2'>3. Differential Calculus</p>
                        </div>
                        <p className="btn btn-primary" onClick={testHandle} >Start</p>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
