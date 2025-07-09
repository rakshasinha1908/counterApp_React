import { useState } from "react";
function Home(){
    const [count, setCount] = useState(0);

    //increment 
    const increment = () =>{
        setCount(count + 1);
    };

    //decrement 
    const decrement = () =>{
        setCount(count - 1);
    };

    //reset 
    const reset = () =>{
        setCount(0);
    };

    return(
        <div className="box">
            <div className="container">
                <div className="container-box">
                    <div className="value">
                        <p>{count}</p>
                    </div>
                    <div className="counter-container">
                        <button className="counter-btn" onClick={decrement} disabled={count === 0}>-</button>
                        <button className="counter-btn" onClick={increment}>+</button>
                    </div>
                    <div className="reset">
                        <button className="counter-btn" onClick={reset}>Reset</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;