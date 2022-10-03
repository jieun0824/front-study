import {useState} from 'react';
import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';

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
                    <div className={styles.contents}>
                        {children}
                    </div>
            </div>
            
        </div>
    );
}

export default Layout;