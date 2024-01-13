import { useState, useEffect } from "react";



function GithubUser ({name, avatar}) {
    return (
        <div className="gituser">
            <h1>{name}</h1>
            <img src={avatar} alt={name} height={150} />

        </div>
    )
}

function Github () {
    const [data, setData] = useState(null);
    const [error, setErrror] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true)
        fetch(
            `https://api.github.com/users/mszahan`
            )
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setErrror);
    }, [])

    if (loading) return <h1>Loading ...</h1>
    if (error)
        return <pre>{JSON.stringify(error)}</pre>
    if (!data) return null;

    return(
        <GithubUser
        name={data.name}
        avatar={data.avatar_url}
        />
        // <pre> {JSON.stringify(data, null, 2)} </pre>
        )

//     return (
//         <div className="github-data">
//            <h1>The github Data</h1> 
//         </div>
// )
}

export default Github;