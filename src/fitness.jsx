import Nav from './navbar';
import Content from './content';
const Fitness = ()=>{
    const pic = 'https://dam.abbott.com/en-us/hub/backviewfulllengthportra_571783.jpg';
    return (
        <div>
            <Nav/>
            <Content pic={pic} title={'Fitness'}/>
        </div>
    )
}
export default Fitness;