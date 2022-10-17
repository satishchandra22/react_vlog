import {Link} from 'react-router-dom';
const S3c2 = (p)=>{
    return(
        <Link to='/post' id='s3c2' style={{backgroundImage: `url(${p.img})`,textDecoration:'none'}}>
            <div id='s3c2t1'>Title of vertical gallery</div>
            <div id='s3c2t2'>Travel / August 21 20217</div>
        </Link>
    )
}
export default S3c2;