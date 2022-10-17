import Nav from './navbar';
import Content from './content';
const Food = ()=> {
    const pic = 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80';
    return (
        <div>
            <Nav/>
            <Content pic={pic} title={'Food'}/>
        </div>
    )
}
export default Food;