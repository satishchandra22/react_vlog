import Dp from './icons/dp.png';
import f from './icons/f.png';
import i from './icons/i.png';
import t from './icons/t.png';
import y from './icons/y.png';
import l from './icons/Screenshot.png';
import c from './icons/content.png';
import r from './icons/rythm.svg';
import s from './icons/share.svg';
import {Link} from 'react-router-dom';
const Post = ()=>{
    const pic = 'https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000';
    return (
        <div id='post'>
        <div id='pnav'>
           <Link to='/' id='pn' style={{textDecoration:'none',color:'black'}}>
                    <div id='pnc1g1'>The</div>
                    <div id='pnc1g2'>Siren</div>
            </Link>
            <div id='pnc2'>Get Started</div>
        </div>
        <div id='ps1'>
            <div id='ps1c1'>5 Ways to animate a React app.</div>
            <div id='ps1c2'>
                <div id='ps1c2g1'>
                    <div id='ps1c2pic' style={{backgroundImage: `url(${Dp})`}}></div>
                    <div id='ps1c2t'>
                        <span id='ps1c2t1' >Dimitry Nozhenko</span><br/>
                        <span id='ps1c2t2'>Jan 28, 2019 10 min read</span>
                    </div>
                </div>
                <div id='ps1c2g2'>
                    <div className="s-icon" style={{backgroundImage: `url(${f})`}}></div>
                    <div className="s-icon" style={{backgroundImage: `url(${i})`}}></div>
                    <div className="s-icon" style={{backgroundImage: `url(${t})`}}></div>
                    <div className="s-icon" style={{backgroundImage: `url(${y})`}}></div>
                </div>
            </div>
            <div id='ps1c3' style={{backgroundImage: `url(${l})`}}></div>
            <div id='ps1c4'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.<br/><br/> Let’s talk about them</div>
            <div id='ps1c5' style={{backgroundImage: `url(${c})`}}></div>
            <div id='ps1c6'>
                <div className='ps1c6g'>React</div>
                <div className='ps1c6g'>Javascript</div>
                <div className='ps1c6g'>Animation</div>
            </div>
            <div id='ps1c7'>
                <div id='ps1c7pic' style={{backgroundImage: `url(${r})`}}></div>
                <div id='ps1c7t'>9.3K claps</div>
            </div>
            <div id='ps1c8'>
                    <div id='ps1c8pic' style={{backgroundImage: `url(${Dp})`}}></div>
                    <div id='ps1c8t'>
                        <span id='ps1c8t1'>Written by</span><br/>
                        <span id='ps1c8t2' >Dimitry Nozhenko</span><br/>
                        <span id='ps1c8t3'>Jan 28, 2019 10 min read</span>
                    </div>
            </div>
        </div>
        <div id='ps2'>
            <div id='ps2i'>
                <div id='ps2c1'>More from the Siren</div>
                <div id='ps2c2'>
                    <div className='ps2c2g'>
                        <div className='ps2c2gt1'>Also tagged reactjs</div>
                        <div className='ps2c2pic' style={{backgroundImage: `url(${pic})`}}></div>
                        <div className='ps2c2gt2'>Joshua Tree Overnight Adventure</div>
                        <div className='ps2c2g1'>
                            <div className='ps2c2gpic' style={{backgroundImage: `url(${Dp})`}}></div>
                            <div className='ps2c2gt'>
                                <span className='ps2c2gt3' >Dimitry Nozhenko</span><br/>
                                <span className='ps2c2gt4'>Jan 28, 2019 10 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className='ps2c2g'>
                        <div className='ps2c2gt1'>Also tagged reactjs</div>
                        <div className='ps2c2pic' style={{backgroundImage: `url(${pic})`}}></div>
                        <div className='ps2c2gt2'>Joshua Tree Overnight Adventure</div>
                        <div className='ps2c2g1'>
                            <div className='ps2c2gpic' style={{backgroundImage: `url(${Dp})`}}></div>
                            <div className='ps2c2gt'>
                                <span className='ps2c2gt3' >Dimitry Nozhenko</span><br/>
                                <span className='ps2c2gt4'>Jan 28, 2019 10 min read</span>
                            </div>
                        </div>
                    </div>
                    <div className='ps2c2g'>
                        <div className='ps2c2gt1'>Also tagged reactjs</div>
                        <div className='ps2c2pic' style={{backgroundImage: `url(${pic})`}}></div>
                        <div className='ps2c2gt2'>Joshua Tree Overnight Adventure</div>
                        <div className='ps2c2g1'>
                            <div className='ps2c2gpic' style={{backgroundImage: `url(${Dp})`}}></div>
                            <div className='ps2c2gt'>
                                <span className='ps2c2gt3' >Dimitry Nozhenko</span><br/>
                                <span className='ps2c2gt4'>Jan 28, 2019 10 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='ps3'>
            <div id='ps3c1'>
                <div id='ps3c1g1' style={{backgroundImage: `url(${r})`}}></div>
                <div id='ps3c1g2'>9.3K</div>
            </div>
            <div id='ps3c2'>
                <div id='ps3c2g1' style={{backgroundImage: `url(${s})`}}></div>
                <div id='ps3c2g2'>Share this article</div>
            </div>
        </div>
        </div>
    )
}

export default Post;