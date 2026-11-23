import { useState } from "react";


export default function Pwd(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function submitt(e){
        e.preventDefault();
         alert(username)
    }

     function submitt(o){
        o.preventDefault();
         alert( 'My user is ' + username + ' My pass is ' + password )
    }

    return(
        <div>
           {/* <div> {username}</div>  */}
            <form onSubmit={submitt}>

                 <label>Username</label> 
                <input type="text" onChange={ function(m){
                    setUsername(m.target.value)
                 }}/> 
                

                  <label>Password</label> 
                <input type="password" onChange={ function(p){
                    setPassword(p.target.value)
                 }}/> 

                 <button>Submit</button>


            </form>
        </div>
    )
}