import { useState } from "react"   

const Button = (props) => {
    const [numOfClicks, setNumberOfClicks] = useState(0);

    const handleClick = () => {
        setNumberOfClicks(numOfClicks+1);
        props.incrementNumberOfClicks();
    }

    return (
        <div>
            <button onClick={handleClick}>Click {props.title}</button>
            <span>{numOfClicks} times!</span>
        </div>

    )
}

export default Button