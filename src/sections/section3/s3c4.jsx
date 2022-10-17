import S3c4g1 from "./s3c4g1";
import S3c4g2 from "./s3c4g2";
const S3c4 = (p)=>{
    return (
        <div id='s3c4'>
            <div id='s3ch1'>
            Top Posts
            <hr id='s3hr1'/>
            </div>
            <S3c4g1 img={p.img}/>
            <S3c4g2 img={p.img}/>
            <S3c4g2 img={p.img}/>
            <S3c4g2 img={p.img}/>
            <div id='s3c4n2'>2</div>
            <div id='s3c4n3'>3</div>
            <div id='s3c4n4'>4</div>
        </div>
    )
}
export default S3c4;