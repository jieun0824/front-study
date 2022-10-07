import Layout from '../components/shared/Layout';
import HomeFilter from '../components/Home/HomeFilter';
import HomeCard from '../components/Home/HomeCard';
import youtubeData from '../data/youtubeData.json';
import ContentsLayout from '../components/shared/ContentsLayout';

function Home(){
    return (
        <Layout activeMenu="home">
            <ContentsLayout>
                {youtubeData['data'].map(function(data, index){
                    return <HomeCard key={`explore-card-${index}`}data={data}/>;
                })}
            </ContentsLayout>
        </Layout>
    );
}

export default Home;