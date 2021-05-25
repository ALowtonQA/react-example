import { useState } from "react";

const ReadMore = () => {

    const TXT = "This is some text";
    const LIMIT = 7;

    const [visible, setVisible] = useState(false);

    return (
        <div>
            {visible ? TXT : TXT.substr(0, LIMIT) + "..."}
            {visible ? (<a onClick={() => setVisible(false)}>[Hide]</a>) : (<a onClick={() => setVisible(true)}>[Show]</a>)}
         </div>
    );
}

export default ReadMore;