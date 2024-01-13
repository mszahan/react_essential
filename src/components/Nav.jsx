import { Link } from "react-router-dom";


function Nav () {
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/color'>Color Form</Link>
            <Link to='/github'>Github</Link>
            <Link to='/graph'>GraphQL</Link>
            <Link to='/rends'>Render Props</Link>
            <Link to='/nesting'>Nesting</Link>
        </div>
    )
}


export default Nav;