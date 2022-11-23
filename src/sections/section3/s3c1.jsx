import S3c1g from "./s3c1g";
const S3c1 = (p)=>{
    console.log(p.data)
    return (
        <div id='s3c1'>
            {p.data.map((i)=><S3c1g data={i} key={i.key}/>)}
        </div>
    )
}
export default S3c1;