import Layout from '../components/shared/Layout';
import HomeFilter from '../components/Home/HomeFilter';
import HomeCard from '../components/Home/HomeCard';
import youtubeData from '../data/youtubeData.json';
import styles from './Home.module.css'
import {useState} from 'react';

const target = ['전체','Music', 'Entertainment', 'Comedy'];

function Home(){

    const [filter, setFilter] = useState('전체');
    
    function mapFunc(data, index){ //callbackFunction
        return (
            <HomeFilter
            filter={filter}
            text={data}
            onClickFilter={function(){
                setFilter(data)
            }}
            />
            
        );
    }

    function filterFunc(data){
        if (filter==='전체'||data['category']===filter) {return true} else {return false}
    }    

    return (

        <Layout activeMenu="home">
            <div className={styles.header}>
                {target.map(mapFunc)}
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>{youtubeData['data'].filter(filterFunc).map(HomeCard)}</div>
            </div>
        </Layout>

    );
}

export default Home;