import Sidebar from "../../Sidebar/Sidebar";
import '../../../App.css'
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Claims(){
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const handleChange = function(e){
        setUser({...user, [e.target.name] : e.target.value});
    }

    const sendData = async function(e){
        e.preventDefault();

        const res = await fetch('/signin', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                email : user.email,
                password : user.password
            })
        })

        if(res.status === 400 || !res){
            window.alert("Login Credentials not valid");
        }
        else if(res.status === 422){
            window.alert("Server not working");
        }
        else{
            window.alert("Login Successful");
            navigate('/');
        }
    }
    return(
        <>
            <div className="sidebar"><Sidebar/></div>
            <h1>Claims Content</h1>
            <div className = 'mt-5 container'>
                <form method="POST">
                    <label>Enter Email Id :
                        <input type="text" name ='email' autoComplete="off" value={user.email} onChange = {handleChange} placeholder = "Enter Email" />
                    </label>
                    <label>Enter Password:
                        <input type="text" name ='password' autoComplete='off' value={user.password} onChange = {handleChange} placeholder = "Enter Password"/>
                    </label>
                    <input type="submit" value="Submit" onClick={sendData}/>
                </form>
            </div>
        </>
    );
}

export default Claims;