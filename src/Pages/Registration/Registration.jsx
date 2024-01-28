import './registration.css'

const Registration = () => {
    return(
        <div className='registration-container'>
                 
                    <section className="registration-form">
                    <h2>Create an Account</h2>
                        <form  method="post">
                         
                            <label for="username">Username:</label>
                            <input type="text" name="username" required/>

                            <label for="email">Email:</label>
                            <input type="email" name="email" required/>

                            <label for="password">Password:</label>
                            <input type="password" name="password" required/>
      
                            <button type="submit">Register</button>
                        </form>
                    </section>

        </div>
    )
}

export default Registration