import {Link} from 'react-router-dom';
const Headpic = (p)=>{
    return(
        
        <Link to='/post' id='s1c1' style={{backgroundImage: `url(${p.img})`}}>
            <span id='s1c1g1'>Title of vertical gallery</span>
            <span id='s1c1g2'>Travel/August 21 2017</span>
        </Link>
        
    )
}

export default Headpic;