import {useQuery} from "@tanstack/react-query"
import Axios from "axios";


export const Home = (props) => {

    const {data: catFact, isLoading, isError, refetch} = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact")
                .then(response => response.data?.fact);
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Sorry, there was ane error</h1>
    }


    return <div>
        <h1>This is the home page with user {props.username}</h1>
        <p>{catFact}</p>
        <button onClick={() => refetch()}>Update data</button>

    </div>
}