import S3c1 from "./s3c1";
import S3c2 from "./s3c2";
import S3c3 from "./s3c3";
import S3c4 from "./s3c4";
const LatestArticle = (p)=>{
    return (
        <div id='s3'>
            <div id='s3ch'>
            Latest Articles
            <hr id='s3hr'/>
            </div>
        <div id='s3i'>
        <div id='s3l' >
        <S3c1 data={p.data.s3c1}/>
        <S3c2 data={p.data.s3c2}/>
        </div>
        <div id='s3r'>
        <S3c3/>
        <S3c4 data={p.data.s3c3}/>
        </div>
        </div>
        </div>
    )
}

export default LatestArticle;
