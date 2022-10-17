import Nav from './navbar';
import Content from './content';
const Hollywood = ()=>{
    const pic = 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/los-angeles.jpg';
    return (
        <div>
            <Nav/>
            <Content pic={pic} title={'Hollywood'}/>
        </div>
    )
}

export default Hollywood;