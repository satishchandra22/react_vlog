import {Link} from 'react-router-dom';
const S4c =(p)=>{
    return(
        <Link to='/post' id='s4c'style={{textDecoration:'none',color:'black'}}>
            <span id='s4ct1'>{p.data.head}</span><br/>
            <br/><span id='s4ct2'>{p.data.text}</span><br/><br/>
            <br/><span id ='s4ct3'><b>{p.data.cat}</b>/ {p.data.time}</span>
        </Link>
    )
}
export default S4c;