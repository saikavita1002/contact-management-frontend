import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getContactById,
    updateContact,
} from "./service/contactservice";

function UpdateContact() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    city: "",
    address: "",
    });

    useEffect(() => {

    getContactById(id)
        .then((response) => {

        setContact(response.data);

        })
        .catch((error) => {

        console.log(error);

        });

    }, [id]);

    const handleChange = (e) => {

    const { name, value } = e.target;

    setContact({
        ...contact,
        [name]: value,
    });

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        await updateContact(id, contact);

        alert("Contact Updated Successfully");

        navigate("/contactList");

    } catch (error) {

        console.log(error);

        alert("Update Failed");

    }

    };

    return (

    <div className="card">

        <h2>Update Contact</h2>

        <form onSubmit={handleSubmit}>

        <div className="mb-3">
            <label className="form-label">Name</label>

            <input
            type="text"
            name="name"
            className="form-control"
            value={contact.name}
            onChange={handleChange}
            />
        </div>

        <div className="mb-3">

            <label className="form-label">Email</label>

            <input
            type="email"
            name="email"
            className="form-control"
            value={contact.email}
            onChange={handleChange}
            />

        </div>

        <div className="mb-3">

            <label className="form-label">Phone</label>

            <input
            type="text"
            name="phoneno"
            className="form-control"
            value={contact.phoneno}
            onChange={handleChange}
            />

        </div>

        <div className="mb-3">

            <label className="form-label">City</label>

            <input
            type="text"
            name="city"
            className="form-control"
            value={contact.city}
            onChange={handleChange}
            />

        </div>

        <div className="mb-3">

            <label className="form-label">Address</label>

            <textarea
            name="address"
            className="form-control"
            rows="3"
            value={contact.address}
            onChange={handleChange}
            />

        </div>

        <button
            type="submit"
            className="btn btn-success"
        >
            Update Contact
        </button>

        </form>

    </div>

    );
}

export default UpdateContact;