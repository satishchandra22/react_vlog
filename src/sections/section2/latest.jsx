import S2post from "./s2post";
const Latest = (p)=>{
    return (
        <div id='s2'>
            <div id='s2ch'>
            The Latest
            <hr id='s2hr'/>
            </div>
            <div id='s2c'>
            <S2post img={p.img}/>
            <S2post img={p.img}/>
            <S2post img={p.img}/>
            </div>
        </div>
    )
}

export default Latest;