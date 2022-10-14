import styles from './ContentsLayout.module.css';

function ContentsLayout({children, activeMenu}){
    return (
        <div className={styles.layout}>
            <div className={styles.container} style={{marginTop: activeMenu==='home'&&'54px'}}>{children}</div>
        </div>
    )
}

export default ContentsLayout;