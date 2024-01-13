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
    

    useEffect(()=> {
        fetch(
            `https://api.github.com/users/mszahan`
            )
            .then((response) => response.json())
            .then(setData);
    }, [])

    if (data)
        return(
            <GithubUser
            name={data.name}
            avatar={data.avatar_url}
            />
            // <pre> {JSON.stringify(data, null, 2)} </pre>
            )

    return (
        <div className="github-data">
           <h1>The github Data</h1> 
        </div>
)
}

export default Github;