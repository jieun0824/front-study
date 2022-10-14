import {useState} from 'react';
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import HomeFilter from '../Home/HomeFilter';

function Layout({children, activeMenu}){

    const [showMenu, setShowMenu] = useState(true);

    function changeSet(){
        setShowMenu(!showMenu);
    }
    


    return (
        <div className={styles.container}>

            <Header changeSet={changeSet} showMenu={showMenu}/>
            
            
            <div className={styles.layout}>
                {showMenu===true&&<Menu activeMenu={activeMenu}/>}
                    <div className={showMenu===true?styles.contents:styles.contentsClose}>
                        {children}
                    </div>
            </div>
            
        </div>
    );
}

export default Layout;