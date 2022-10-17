import {Link} from 'react-router-dom';
const S3c4g1 = (p)=>{
    return(
        <Link to='/post' id='s3c4g1' style={{textDecoration:'none',color:'black'}}>
            <div id='s3c4g1pic' style={{backgroundImage: `url(${p.img})`}}></div>
            <div id='s3c4g1t'>
                <span id='s3c4g1t1'>Catch waves with an adventure guide</span><br/><br/>
                <span id='s3c4g1t2'><b>Travel</b>/ August 21 2017</span>
                <div id='s3c4n1'>1</div>
            </div>
            
        </Link>
    )
}

export default S3c4g1;