import {Link} from 'react-router-dom';
const S3c2 = (p)=>{
    return(
        <Link to='/post' id='s3c2' style={{backgroundImage: `url(${p.data.img})`,textDecoration:'none'}}>
            <div id='s3c2t1'>{p.data.head}</div>
            <div id='s3c2t2'>{p.data.cat} / {p.data.time}</div>
        </Link>
    )
}
export default S3c2;