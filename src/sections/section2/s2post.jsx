import {Link} from 'react-router-dom';
const S2post = (p)=>{
    return (
        <Link to='/post' id='s2c1' style={{textDecoration:'none'}}>
           <div id='s2c1img' style={{backgroundImage: `url(${p.data.img})`}}></div>
           <div id='s2c1g1'>
            <span id='s2c1t1'>
            {p.data.head}
            </span><br/>
            <span id='s2c1t2'>
            {p.data.text}
            </span><br/><br/>
            <span id='s2c1t3'>
                <b>{p.data.cat}</b>/ {p.data.time}
            </span>
           </div>
        </Link>
    )
}

export default S2post;