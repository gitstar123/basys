import Sidebar from "../../Sidebar/Sidebar";
import './../../../App.css'
import { useState } from "react";

function MyProfile(){
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    });

    const handleInput = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }

    const SendData = async(e) => {
        e.preventDefault();

        const reply = await fetch('/signup', {
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                firstName : user.firstName,
                lastName : user.lastName,
                email : user.email,
                password : user.password
            })
        });
        
        if(reply.status === 422 || !reply){
            window.alert("Invalid Registration");
        }else{
            window.alert("successful registration");
        }
    }

    return(
        <>
            <div className="sidebar"><Sidebar/></div>
            <div className="container mt-5">
                <form method="POST">
                    <label> Enter First Name: 
                        <input type= 'text' name = 'firstName' autoComplete="off" value={user.firstName} onChange = {handleInput}/>
                    </label>
                    <br/>
                    <label> Enter Last Name:
                        <input type = 'text' name = 'lastName' autoComplete="off" value={user.lastName}  onChange = {handleInput}/>
                    </label>
                    <br/>
                    <label> Enter Email:
                        <input type = 'text' name = 'email' autoComplete="off" value={user.email}  onChange={handleInput}/>
                    </label>
                    <br/>
                    <label> Enter Password:
                        <input type= 'text' name = 'password' autoComplete="off" value={user.password} onChange={handleInput}/>
                    </label>
                    <input type= 'submit' value = 'Submit' onClick={SendData}/>
                </form>
            </div>
            
        </>
    )
}

export default MyProfile;