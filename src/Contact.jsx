import { useState } from "react";

function CollegeContact() {
    const [user, setUser] = useState({
    name: "",
    course: "",
    email: "",
    });

    const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(
        `Name: ${user.name}\nCourse: ${user.course}\nEmail: ${user.email}`
    );
    };

    return (
  <div className="contact">
    <h2>Contact Form</h2>

    <form onSubmit={handleSubmit}>

        <div className="mb-3">
        <label className="form-label">Name</label>
        <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={handleChange}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Email</label>
        <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={handleChange}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Enter Phone Number"
            onChange={handleChange}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">City</label>
        <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Enter City"
            onChange={handleChange}
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Address</label>
        <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter Address"
            onChange={handleChange}
        />
    </div>

        <button type="submit" className="btn btn-primary w-100">
        Submit
        </button>

    </form>
    </div>
);
}

export default CollegeContact;