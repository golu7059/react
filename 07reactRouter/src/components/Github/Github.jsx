import React from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

        const data = useLoaderData();

    // const[data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/golu7059')
    //     .then(response => response.json())
    //     .then(datai => setData(datai)) 
    // },[])
    
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg">
        Github Followers : {data.followers}
        <img className="rounded-xl"
        src={data.avatar_url} alt="git profile pic" width={210} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
        const response = await fetch('https://api.github.com/users/golu7059')
        return response.json()
}