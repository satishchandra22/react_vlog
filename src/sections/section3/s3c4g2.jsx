import {Link} from 'react-router-dom';
const S3c4g2=(p)=>{
    return (
        <Link to='/post' id='s3c4g2' style={{textDecoration:'none',color:'black'}}>
            <div id='s3c4g2img' style={{backgroundImage: `url(${p.data.img})`}}></div>
            <div id='s3c4g2t'>
                <span id='s3c4g2t1'>{p.data.head}</span><br/><br/>
                <span id='s3c4g2t2'><b>{p.data.cat}</b>/ {p.data.time}</span>
                <div className='s3c4n1'>{p.rank}</div>
            </div>
        </Link>
    )
}

export default S3c4g2;