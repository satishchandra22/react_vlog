import S2post from "./s2post";
const Latest = (p)=>{
    return (
        <div id='s2'>
            <div id='s2ch'>
            The Latest
            <hr id='s2hr'/>
            </div>
            <div id='s2c'>
            <S2post data={p.data.s2c1}/>
            <S2post data={p.data.s2c2}/>
            <S2post data={p.data.s2c3}/>
            </div>
        </div>
    )
}

export default Latest;