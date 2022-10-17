import S1 from './sections/section1/s1';
import Latest from './sections/section2/latest';
import Nav from './navbar';
import LatestArticle from './sections/section3/LatestArticles';
import LatestStories from './sections/section4/LatestStories';
function Home(){
    const pic = 'https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000'
    return(
        <>
          <Nav/>
          <S1 img={pic}/>
          <Latest img={pic}/>
          <LatestArticle img={pic}/>
          <LatestStories/>
        </>
    )
}

export default Home;