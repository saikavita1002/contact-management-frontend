import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post(
        "http://localhost:3000/api/auth/sign-up",
        formData
        );

        setMessage("Registration Successful!");

      // Redirect to Login after successful registration
        setTimeout(() => {
        navigate("/login");
        }, 1500);

    } catch (error) {
        setMessage(
        error.response?.data?.message ||
        error.message ||
        "Registration Failed"
        );
    }
    };

    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="col-md-5">
            <div className="card shadow">
            <div className="card-header text-center">
                <h3>Sign Up</h3>
            </div>

            <div className="card-body">
                {message && (
                <div className="alert alert-info">
                    {message}
                </div>
                )}

                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    SignUp
                </button>
                </form>

                <div className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login">
                    Login
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default SignUp;
