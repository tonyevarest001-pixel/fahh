import { useState } from "react";


export default function User(){
    const [username, setUsername] = useState('');

    function submitt(e){
        e.preventDefault();
         alert(username)
    }

    return(
        <div>
           {/* <div> {username}</div>  */}
            <form onSubmit={submitt}>
                 <label>Username</label> 
                <input type="text" onChange={ function(m){
                    setUsername(m.target.value)
                 }}/> 
                 <button>Submit</button>


            </form>
        </div>
    )
}