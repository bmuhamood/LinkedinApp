import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="Login">
            <img
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok_lR0ks" alt=""
            />
            <form>
            
            <input placeholder="Full Name (required if registering)" type="text" />

            </form>
        </div>
    )
}

export default Login;   