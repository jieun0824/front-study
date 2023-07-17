import React from "react";
import styles from './HomeHeader.module.css';
import {BsGrid3X3GapFill} from 'react-icons/bs';

function HomeHeader(){
    return(
        <div className={styles.container}>
            <div className={styles.containerItem1}>
                <div>Google 정보</div>
                <div>스토어</div>
            </div>
            <div className={styles.containerItem2}>
                <div>Gmail</div>
                <span>이미지</span>
                <BsGrid3X3GapFill size={20}/>
            </div>
        </div>
    )
}

export default HomeHeader;