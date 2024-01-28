import './style.css'
import Header from './components/Header/Header'
import cart from './img/cart.png'
import { useEffect,useState } from 'react'
import {WatchCard} from './components/WatchCard/WatchCard'
import Footer from './components/Footer/Footer'
import axios from 'axios'

const Main = () => {
    const [email, setEmail  ] = useState("");
    const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/watches")
      .then((data) => setData(data.data));
  }, []);


    return (   
    <div>


       <Header />
        <h5>Click On Watch Photo To See Its Details!</h5>
    <section className="featured-watches">
        
        {
            data.map((data) => (<WatchCard data={data}/> ))
        }
        
    </section>

    <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form>
           
            <input type="email" value={email} onChange=  {(e) => setEmail(e.target.value)} name="email" placeholder="Your email" required/>
            <button className='subBtn' type="submit" onClick={() => {setEmail(""); alert("Thank you for your subscribtion") } }>Subscribe</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 Watches Store. All rights reserved.</p>
    </footer>
</div>
    

 )
}

export default Main