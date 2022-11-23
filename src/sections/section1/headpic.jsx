import {Link} from 'react-router-dom';
const Headpic = (p)=>{
    return(
        
        <Link to='/post' id='s1c1' style={{backgroundImage: `url(${p.data.img})`}}>
            <span id='s1c1g1'>{p.data.head}</span>
            <span id='s1c1g2'>{p.data.time}</span>
        </Link>
        
    )
}

export default Headpic;