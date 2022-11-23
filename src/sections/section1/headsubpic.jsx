import {Link} from 'react-router-dom';
const Headsubpic = (p)=>{
    return (
        <Link  to='/post' id='s1c2' style={{backgroundImage: `url(${p.data.img})`}}>
            <span id='s1c2g1'>{p.data.head}</span>
            <span id='s1c2g2'>{p.data.time}</span>
        </Link>
    )
}

export default Headsubpic;