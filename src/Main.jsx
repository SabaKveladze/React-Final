import './style.css'
import Header from './components/Header/Header'

import { useEffect, useState } from 'react'
import { WatchCard } from './components/WatchCard/WatchCard'

import axios from 'axios'

const Main = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3031/watches")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    if (inputValue === "") {
      axios
        .get("http://localhost:3031/watches")
        .then((response) => setData(response.data));
    } else {
      const filteredData = data.filter((watch) =>
        watch.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setData(filteredData);
    }
  }, [inputValue]);

  return (
    <div>
      <Header />
      <h5>Click On Watch Photo To See Its Details!</h5>
      <input
        placeholder='Search'
        className='search'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <section className="featured-watches">
        {
          data.map((watch, index) => (<WatchCard key={index} data={watch}/> ))
        }
      </section>
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Your email"
            required
          />
          <button
            className='subBtn'
            type="submit"
            onClick={() => {setEmail(""); alert("Thank you for your subscription") }}
          >
            Subscribe
          </button>
        </form>
      </section>
      <footer>
        <p>&copy; 2024 Watches Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Main
