import Nav from './navbar';
import Content from './content';
function Bollywood(){
    const pic = 'https://pinkroom-main.s3.amazonaws.com/Copy-of-800-x-500-Blog-Post-13-5.png';
    return (
        <div>
            <Nav/>
            <Content pic={pic} title={'Bollywood'}/>
        </div>
    )
}

export default Bollywood;