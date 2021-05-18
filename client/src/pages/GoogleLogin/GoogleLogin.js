import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}

//if logged in let them log out
<GoogleLogout
    clientId="1094362054657-5441ms0qvcg5aq3n5namc3qid4cdqp4c.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
>

</GoogleLogout>
//if not logged in
ReactDOM.render(
    <GoogleLogin
        clientId="1094362054657-5441ms0qvcg5aq3n5namc3qid4cdqp4c.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('googleButton')
);