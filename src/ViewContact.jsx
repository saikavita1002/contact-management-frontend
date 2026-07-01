import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContactById } from "./service/contactservice";

function ViewContact() {

    const { id } = useParams();
    const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    city: "",
    address: ""
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

    return (

    <div className="card">

        <h2>View Contact</h2>

        <div className="mb-3">
        <label className="form-label">Name</label>
        <input
            className="form-control"
            value={contact.name}
            readOnly
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Email</label>
        <input
            className="form-control"
            value={contact.email}
            readOnly
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
            className="form-control"
            value={contact.phoneno}
            readOnly
        />
        </div>

        <div className="mb-3">
        <label className="form-label">City</label>
        <input
            className="form-control"
            value={contact.city}
            readOnly
        />
        </div>

        <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea
            className="form-control"
            value={contact.address}
            readOnly
        />
        </div>

    </div>

    );
}

export default ViewContact;