import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the Dashboard !</p>
            <ul>
                <li>
                    <Link to="overview">Overview</Link>
                </li>
                <li>
                    <Link to="settings">Settings</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Dashboard;