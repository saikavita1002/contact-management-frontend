import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
    name: "",
    emailid: "",
    password: "",
    mobileno: "",
    workstatus: "",
    });

    const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
        ...formData,
        [name]: value,
    });
    };

    const onSubmitHandler = (e) => {
    e.preventDefault();

    alert("Form Submitted Successfully");
    console.log(formData);
    };

    const resetHandler = () => {
    setFormData({
        name: "",
        emailid: "",
        password: "",
        mobileno: "",
        workstatus: "",
    });
    };

    return (
    <div className="card">
        <h2>Register Here</h2>

        <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={changeHandler}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
            type="email"
            name="emailid"
            className="form-control"
            placeholder="Enter Email ID"
            value={formData.emailid}
            onChange={changeHandler}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Password</label>
            <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            value={formData.password}
            onChange={changeHandler}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
            type="tel"
            name="mobileno"
            className="form-control"
            placeholder="Enter Mobile Number"
            value={formData.mobileno}
            onChange={changeHandler}
            required
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Work Status</label>

            <div className="radio-group">
            <label>
                <input
                type="radio"
                name="workstatus"
                value="Experienced"
                checked={formData.workstatus === "Experienced"}
                onChange={changeHandler}
                />
                Experienced
            </label>

            <label>
                <input
                type="radio"
                name="workstatus"
                value="Fresher"
                checked={formData.workstatus === "Fresher"}
                onChange={changeHandler}
                />
                Fresher
            </label>
            </div>
        </div>

        <div className="button-group">
            <button
            type="submit"
            className="btn btn-success"
            >
            Register
            </button>

            <button
            type="button"
            className="btn btn-warning"
            onClick={resetHandler}
            >
            Reset
            </button>
        </div>
        </form>
    </div>
    );
};

export default Register;