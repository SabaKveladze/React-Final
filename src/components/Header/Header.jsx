import cart from '../../img/cart.png'
import {Link} from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        
    <header>
        
        <h1>Watches Store</h1>
        <p>Discover the finest timepieces for every moment.</p>
        <div className='navDiv'>
           <Link className='navMenu' to='/'>Home</Link>
           <Link className='navMenu' to='/Watches'>Watches</Link> 
           <Link className='navMenu' to='/Profile'>Profile</Link> 
        </div>
        
       <div className="cartDiv">
        <Link to={"/cart"}><button type="button" className="cart-button" >Cart</button></Link>
        <img alt='cart photo' className="cartImg" src={cart}/>
    </div>
       
    </header>

    )
}
export default Header