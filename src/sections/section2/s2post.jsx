import {Link} from 'react-router-dom';
const S2post = (p)=>{
    return (
        <Link to='/post' id='s2c1' style={{textDecoration:'none'}}>
           <div id='s2c1img' style={{backgroundImage: `url(${p.img})`}}></div>
           <div id='s2c1g1'>
            <span id='s2c1t1'>
            Joshua Tree Overnight Adventure
            </span><br/>
            <span id='s2c1t2'>
            Gujarat is vastly underrated and it's a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces
            </span><br/><br/>
            <span id='s2c1t3'>
                <b>Travel</b>/ August 21 2017
            </span>
           </div>
        </Link>
    )
}

export default S2post;