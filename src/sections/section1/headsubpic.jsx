import {Link} from 'react-router-dom';
const Headsubpic = (p)=>{
    return (
        <Link  to='/post' id='s1c2' style={{backgroundImage: `url(${p.img})`}}>
            <span id='s1c2g1'>The Sound cloud You loved is doomed</span>
            <span id='s1c2g2'>Travel/ Agust 21 2017</span>
        </Link>
    )
}

export default Headsubpic;