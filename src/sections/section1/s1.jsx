import H1 from "./headpic";
import H2 from "./headsubpic";
const S1 = (p)=>{
    return (
        <div id='s1'>
            <H1 data={p.data.s1c1}/>
            <H2 data={p.data.s1c2}/>
            <H2 data={p.data.s1c3}/>
        </div>
    )
}
export default S1;