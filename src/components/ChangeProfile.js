import {useState} from "react";

export const ChangeProfile = (props) => {

    const [newUsername, setUsername] = useState("");

    return(

        <div>
            <input placeholder="Provide new username"
                onChange={
                    (event)=> {
                        setUsername(event.target.value);
                    }
                }
            />
            <button>Change username</button>
        </div>

    )
};