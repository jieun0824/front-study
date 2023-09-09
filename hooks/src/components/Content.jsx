import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content =()=>{
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    return(
        <header className="content"
        style={{
            backgroundColor:isDark?'black':'lightgray',
            color:isDark?'white':'black',
        }}>
            <p>{user}님, 좋은 하루 되세요!</p>
        </header>
    )
}

export default Content;