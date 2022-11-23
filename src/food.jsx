import Nav from './navbar';
import Content from './content';
import { useEffect } from 'react';
import { useState } from 'react';
const Food = ()=> {
    const [data , setdata] = useState({s1:[{id:'nan'}],s2:{s3c3g1:{img:'',head:'',time:'',cat:''},s3c3g2:{img:'',head:'',time:'',cat:''},s3c3g3:{img:'',head:'',time:'',cat:''},s3c3g4:{img:'',head:'',time:'',cat:''}}});
    useEffect(()=>{
      const url = 'https://react-blog-backend-satish.herokuapp.com/food'
      const fetchData = async ()=>{
        try {
          const response = await fetch(url);
          const json = await response.json();
          setdata({s1:json.s1,s2:json.s2})
        }catch (error) {
          console.log('error',error);
        }
      }
      fetchData();
    },[])
    return (
        <div>
            <Nav/>
            <Content data={data} title={'Food'}/>
        </div>
    )
}
export default Food;