import React, {useState} from 'react'

// 40, 60 , 61 , 120 = 2:00

export default function StopWatch() {
    const [count, setCount] = useState(0);
    const [interval, setInter] = useState();
    const [pause, setPause] = useState(true);

    // console.log(sec);

    function start() { 
        setPause(!pause);
        if(pause == false) {
            const inter = setInterval( secInc, 1000 ) ;
            setInter(inter);
        }

        else {
            clearInterval(interval);
        }
    }

    function secInc() {
        setCount( (count) => count+1 );
    }

    function ResetFun() {
        setCount(0);
        clearInterval(interval);
    }

    return (
        <div>
            <p>Functional Component Stopwatch</p>
            <span id = "time">{ Math.floor(count/60) } : { count%60 }</span>
            <br />
            <button onClick={ResetFun} id="reset-button">Reset</button>
            <button onClick={start} id="start-button">Start / Stop</button>
            <br />
        </div>
    )
}
