import {Link} from 'react-router-dom';
const S3c1g  =  (p)=> {
    return (
        <Link to='/post' id='s3c1g' style={{textDecoration:'none'}}>
            <div id='s3c1gpic' style={{backgroundImage: `url(${p.img})`}}></div>
            <div id='s3c1gt'>
                <span id='s3c1gt1' style={{color:'black'}}>Catch waves with an adventure guide</span><br/>
                <span id='s3c1gt2'>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-</span>
                <br/><br/><span id='s3c1gt3'><b>Travel</b> / August 21 2017</span>
            </div>
        </Link>
    )
}
export default S3c1g;