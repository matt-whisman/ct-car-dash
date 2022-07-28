import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Home from "./views/Home";
import Inventory from "./views/Inventory";
import Profile from "./views/Profile";
import CarSingle from "./views/CarSingle";
import firebase from "./firebase";
import { AuthContext } from "./contexts/AuthProvider";

export default function App() {
    const { login, logout, user } = useContext(AuthContext);
    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                    <ul>
                        {
                            (user.loggedIn) ?
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                            :
                            <li>
                                <button onClick={login}>Login</button>
                            </li>
                        }
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inventory" element={<Inventory />}>
                        <Route path=":id" element={<CarSingle />} />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    );
}
