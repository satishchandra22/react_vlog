import S1 from './sections/section1/s1';
import Latest from './sections/section2/latest';
import Nav from './navbar';
import LatestArticle from './sections/section3/LatestArticles';
import LatestStories from './sections/section4/LatestStories';
import { useEffect } from 'react';
import { useState } from 'react';
function Home(){
    const [data , setdata] = useState({s1:{s1c1:{head:'',img:'',time:'',text:''},s1c2:{head:'',img:'',time:'',text:''},s1c3:{head:'',img:'',time:'',text:''}},s2:{s2c1:{head:'',img:'',time:'',text:'',cat:''},s2c2:{head:'',img:'',time:'',text:'',cat:''},s2c3:{head:'',img:'',time:'',text:'',cat:''}},s3:{s3c1:[{id:'nan'}],s3c2:{img:'',head:'',time:'',cat:''},s3c3:{s3c3g1:{img:'',head:'',time:'',cat:''},s3c3g2:{img:'',head:'',time:'',cat:''},s3c3g3:{img:'',head:'',time:'',cat:''},s3c3g4:{img:'',head:'',time:'',cat:''}}},s4:{s4c1:{head:'',text:'',time:'',cat:''},s4c2:{head:'',text:'',time:'',cat:''},s4c3:{head:'',text:'',time:'',cat:''}}});
    useEffect(()=>{
      const url = 'https://react-blog-backend-satish.herokuapp.com/'
      const fetchData = async ()=>{
        try {
          const response = await fetch(url);
          const json = await response.json();
          setdata({s1:json.s1,s2:json.s2,s3:json.s3,s4:json.s4})
        }catch (error) {
          console.log('error',error);
        }
      }
      fetchData();
    },[])
    return(
        <>
          <Nav/>
          <S1 data={data.s1}/>
          <Latest data={data.s2}/>
          <LatestArticle data={data.s3}/>
          <LatestStories data={data.s4}/>
        </>
    )
}

export default Home;