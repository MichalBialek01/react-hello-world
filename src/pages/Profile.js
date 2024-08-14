import {ChangeProfile} from "../components/ChangeProfile";

export const Profile = (props) => {
    return (
        <h1>
            This is the profile page with user {props.username} <ChangeProfile setUsername={props.setUsername} />
        </h1>
    )
}