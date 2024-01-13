import { Outlet, Link } from "react-router-dom";



export function Nested () {
    return (
        <div className="nested">
            <h1>This is nested within the app</h1>
        </div>
    )
}

export function Nesting () {
    return (
        <div className="">
            <h1>there is another sectioin which is nested here</h1>
            <Link to='/nesting/nested'> click to route there </Link>
            <Outlet/>
        </div>
    )
}

// export {Nested};
// export {Nesting};