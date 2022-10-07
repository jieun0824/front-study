import styles from './HomeFilter.module.css'

function HomeFilter(){
    return(
        <div className={styles.HomeHeader}>
            <div className={styles.buttons}>
                <button>전체</button>
                <button>BTS</button>
                <button>LISA</button>
                <button>아이폰</button>
            </div>
        </div>
    )
}

export default HomeFilter;