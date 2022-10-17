import {Link} from 'react-router-dom';
import m from './icons/m.png';
const Nav = ()=>{
    function show(){
        const e1=document.getElementById('ns2');
        e1.style.display='flex';
    }
    return (
        <>
          <div id='nav'>
                <Link to='/' id='ns1' style={{textDecoration:'none',color:'black'}}>
                    <div id='ns1c1'>The</div>
                    <div id='ns1c2'>Siren</div>
                </Link>
                <div id='ns2'>
                    <Link className='nc' to='/'>Home</Link>
                    <Link className='nc' to='/bollywood'>Bollywood</Link>
                    <Link className='nc' to='/technology'>Technology</Link>
                    <Link className='nc' to='/hollywood'>Hollywood</Link>
                    <Link className='nc' to='/fitness'>Fitness</Link>
                    <Link className='nc' to ='/food'>Food</Link>
                </div>
                <div id='menu' style={{backgroundImage: `url(${m})`}} onClick={show}></div>
          </div>
        </>
    )
}

export default Nav ;