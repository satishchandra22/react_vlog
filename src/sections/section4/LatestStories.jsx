import S4c from "./s4c";
const LatestStories = ()=>{
    return (
        <div id='s4'>
            <div id='s4ch'>
            Latest Stories
            <hr id='s4hr'/>
            </div>
            <div id='s4cd' >
            <S4c/>
            <hr className="s4hr1"/>
            <S4c />
            <hr className="s4hr1"/>
            <S4c />
            </div>

        </div>
    )
}
export default LatestStories;