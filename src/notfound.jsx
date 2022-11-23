import {Link} from 'react-router-dom';

const Notfound = ()=>{
    return (
        <>
        <h1> Page not found</h1>
        <Link to='/'>Go to Home</Link>
        </>
        
    )
}

export default Notfound;