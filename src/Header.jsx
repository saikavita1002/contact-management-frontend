
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    };

    return (
    <div>
        <h5 style={{ color: "blue" }}>
        Contact Management System
        </h5>

        <button
        className="btn btn-danger"
        onClick={handleLogout}
        >
        Logout
        </button>
    </div>
    );
};

export default Header;