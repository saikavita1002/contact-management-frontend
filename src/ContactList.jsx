import { useState, useEffect } from "react";
import { getAllContacts, deleteContact as deleteContactAPI } from "./service/contactservice";
import { useNavigate } from "react-router-dom";

function ContactList() {

    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllContacts()
            .then((response) => {
                console.log(response.data);
                setContacts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const viewContact = (id) => {
        navigate(`/view-contact/${id}`);
    };

    const updateContact = (id) => {
        navigate(`/update-contact/${id}`);
    };
    const deleteContact = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        await deleteContactAPI(id);

        setContacts(
            contacts.filter(
                (contact) => contact._id !== id
            )
        );

        alert("Contact Deleted Successfully");

    } catch (error) {

        console.log(error);

        alert("Delete Failed");

    }

};

    const addContact = () => {
    navigate('/contactUs');
};

    return (
        <>
            <h3>This is Contact List Page</h3>

            <div className="container">

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addContact}
                >
                    Add Contact
                </button>

                <h3>List Of Employees</h3>

                <table className="table">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phoneno}</td>
                                <td>{contact.city}</td>
                                <td>{contact.address}</td>

                                <td>
                                    <button
                                        className="btn btn-info me-2"
                                        onClick={() => viewContact(contact._id)}
                                    >
                                        View
                                    </button>

                                    <button
                                        className="btn btn-warning"
                                        onClick={() => updateContact(contact._id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteContact(contact._id)}
                                    >
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    );
}

export default ContactList;