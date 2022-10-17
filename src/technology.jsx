import Nav from './navbar';
import Content from './content';
const Technology = ()=>{
    const pic = 'https://media.istockphoto.com/photos/abs-hologram-data-flow-grid-picture-id1212064060?k=20&m=1212064060&s=612x612&w=0&h=LrW6gxz5eC5H-fyJF6PFdCUdtHAfBRMxho1hx-YluL4=';
    return (
        <div>
            <Nav/>
            <Content pic={pic} title={'Technology'}/>
        </div>
    )
}

export default Technology;