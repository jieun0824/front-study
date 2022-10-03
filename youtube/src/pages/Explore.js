import Layout from '../components/shared/Layout';
import styles from './Explore.module.css';

function Explore(){
    return (
        <Layout activeMenu="explore">
            <div className={styles.container}>*탐색</div>
        </Layout>
    );
}

export default Explore;