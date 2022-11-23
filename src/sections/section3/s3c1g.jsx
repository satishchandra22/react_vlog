import {Link} from 'react-router-dom';
const S3c1g  =  (p)=> {
    return (
        <Link to='/post' id='s3c1g' style={{textDecoration:'none'}}>
            <div id='s3c1gpic' style={{backgroundImage: `url(${p.data.img})`}}></div>
            <div id='s3c1gt'>
                <span id='s3c1gt1' style={{color:'black'}}>{p.data.head}</span><br/>
                <span id='s3c1gt2'>{p.data.text}</span>
                <br/><br/><span id='s3c1gt3'><b>{p.data.cat}</b> / {p.data.time}</span>
            </div>
        </Link>
    )
}
export default S3c1g;