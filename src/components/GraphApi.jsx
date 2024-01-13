import { useState, useEffect } from "react";


const query = `
query {
    allLifts{
      name
      elevationGain
      status
    }
  }
`

const opts = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
};


function Graph ({name, elevationGain, status}) {
    return (
        <div className="graph">
            <h1> {name} </h1>
            <p> {elevationGain} {status} </p>
        </div>
    )
}

function GraphQl () {
    const [data, setData] = useState(null);
    const [error, setErrror] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true)
        fetch(
            `https://snowtooth.moonhighway.com/`, opts
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
        <div>
            {data.data.allLifts.map((lift) => (
                <Graph 
                name={lift.name}
                elevationGain={lift.elevationGain}
                status={lift.status}
                />
            ))}
        </div>
        )


}

export default GraphQl;