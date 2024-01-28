import { Navigate } from 'react-router-dom'
import './watchcard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const WatchCard = ({data}) => {
    
    const addtoCart = async (post) => {
        try {
          // Check if the post with the given ID exists
          let existingPost = false;
          try {
            existingPost = await axios.get(
              `http://localhost:3031/cart_list/${post.id}`
            );
          } catch (error) {
            existingPost = false;
          }
          if (existingPost.data) {
            // If the post exists, update it using PATCH
            const response = await axios.patch(
                
              `http://localhost:3031/cart_list/${post.id}`,
              { ...existingPost.data, quantity: existingPost.data.quantity + 1 }
             
            );
                console.log("aeeeeeeeeeeeeeeeee")
                console.log(existingPost.data)

          } else {
            console.log("bbb");
            // If the post doesn't exist, add it using POST
            const response = await axios.post("http://localhost:3031/cart_list", {
              ...post,
              quantity: 1,
            });
          }
        } catch (error) {
          console.error("Error adding or updating post:", error);
        }
      };


    return(
        <div className="watch">
            <Link to= {`/Details/${data.id}`}><img className="watchesImg" src={data.imgUrl} alt="Watch 1"/></Link>
            <h2>{data.name}</h2>
            <h4>{data.brand}</h4>
            <p className="describe">{data.description}</p>
            <p className="price">{data.price}</p>
            
            <button onClick={() => addtoCart(data)} className="add-to-cart" >Add to Cart</button>
        </div>  
    )
}


