import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container">
            <h1>Not found page</h1>
            <Link to='/'>To Home page</Link>
        </div>
    )
}