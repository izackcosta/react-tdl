import { Link } from "react-router-dom"

const Home = () =>
{
    return(
        <div className="home-panel">
            <div className="home-panel-border">
            <h1>WELCOME TO REACT TO DO LIST!</h1>
            <p className="subtitle">Here you can create a list of tasks(or anything) to better organize yourself</p>
            <Link to='/tdl'><button>create new list</button></Link>
            </div>
        </div>
    )
}

export default Home