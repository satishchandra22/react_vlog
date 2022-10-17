import S3c1g from './sections/section3/s3c1g';
import S3c4 from './sections/section3/s3c4';
import S3c3 from './sections/section3/s3c3';
const Content = (p)=>{
    return(
        <div id='bs'>
        <div id='bsl'>
            <div id='bsch'>
                {p.title}
                <hr id='bshr'/>
            </div>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
            <S3c1g img={p.pic}/>
        </div>
        <div id='bsr'>
            <S3c4 img={p.pic}/>
            <S3c3/>
        </div>
    </div>
    )
}
export default Content;