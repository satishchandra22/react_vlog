import S4c from "./s4c";
const LatestStories = (p)=>{
    return (
        <div id='s4'>
            <div id='s4ch'>
            Latest Stories
            <hr id='s4hr'/>
            </div>
            <div id='s4cd' >
            <S4c data={p.data.s4c1}/>
            <hr className="s4hr1"/>
            <S4c data={p.data.s4c2}/>
            <hr className="s4hr1"/>
            <S4c data={p.data.s4c3}/>
            </div>

        </div>
    )
}
export default LatestStories;