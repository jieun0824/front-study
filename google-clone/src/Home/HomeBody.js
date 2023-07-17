import styles from './HomeBody.module.css';
import {AiOutlineSearch, AiOutlineCamera} from 'react-icons/ai'
import {BsFillKeyboardFill, BsFillMicFill} from 'react-icons/bs';
import google_logo from '../data/google-logo.png';
import {Link} from 'react-router-dom';

function HomeBody() {
    return(
        <div className={styles.container}>
            <Link to ='/'><img src={google_logo} alt={`google-logo`}/></Link>
            <div className={styles.body}>
            <form className={styles.inputWrapper}>
                <AiOutlineSearch className={styles.icon} size={20}/>
                <input placeholder={'Google 검색 또는 URL 입력'}/>
                <BsFillKeyboardFill className={styles.icon2} size={20}/>
                <BsFillMicFill className={styles.icon2} size={20}/>
                <AiOutlineCamera className={styles.icon2} size={20}/>
            </form>
            </div>
        </div>
    )
}

export default HomeBody;