import S3c1g from './sections/section3/s3c1g';
import S3c4 from './sections/section3/s3c4';
import S3c3 from './sections/section3/s3c3';
const Content = (p)=>{
    console.log(p.data.s1);
    return(
        <div id='bs'>
        <div id='bsl'>
            <div id='bsch'>
                {p.title}
                <hr id='bshr'/>
            </div>
            {p.data.s1.map((i)=><S3c1g data={i} key={i.key}/>)}
        </div>
        <div id='bsr'>
            <S3c4 data={p.data.s2}/>
            <S3c3/>
        </div>
    </div>
    )
}
export default Content;