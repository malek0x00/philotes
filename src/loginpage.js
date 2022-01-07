import React from 'react';
import Login from './login';

let x = true;
class LoginPage extends React.Component {
    
    render(){
        if(x)
        return (<Login isPhone="true"/>);
        else
        return(<Login isPhone="false"/>)
    }

}

export default LoginPage;