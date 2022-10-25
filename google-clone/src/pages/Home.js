import {AiOutlineSearch, BsFillKeyboardFill, BsFillMicFill} from 'react-icons/fa'
import google_logo from '../data/google-logo.png';
import {Link} from 'react-router-dom';

function Home(){
    return (
        
        <div>
            <Link to ='/'><img src={google_logo}/></Link>
        </div>
    )
}

export default Home;

