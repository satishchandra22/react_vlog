import S3c4g1 from "./s3c4g1";
import S3c4g2 from "./s3c4g2";
const S3c4 = (p)=>{
    return (
        <div id='s3c4'>
            <div id='s3ch1'>
            Top Posts
            <hr id='s3hr1'/>
            </div>
            <S3c4g1 data={p.data.s3c3g1}/>
            <S3c4g2 data={p.data.s3c3g2} rank={2}/>
            <S3c4g2 data={p.data.s3c3g3} rank={3}/>
            <S3c4g2 data={p.data.s3c3g4} rank={4}/>
        </div>
    )
}
export default S3c4;