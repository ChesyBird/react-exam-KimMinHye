import { useState } from "react";

const LikeButton = () => {

    const [count, setCount] = useState(0);

    const handleCnt = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>좋아요 {count}</p>
            <button onClick={handleCnt}>👍</button>
        </div>
    )
}

export default LikeButton;