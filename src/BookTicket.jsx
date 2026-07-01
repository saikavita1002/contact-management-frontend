import { useState } from "react";

const BookTicket = () => {
    const [ticket, setTicket] = useState({
        name: "",
        age: "",
        from: "",
        to: "",
        date: "",
        coach: "",
        seats: "",
    });

    const handleChange = (e) => {
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `🚆 Train Ticket Booked Successfully!

Name: ${ticket.name}
Age: ${ticket.age}
From: ${ticket.from}
To: ${ticket.to}
Date: ${ticket.date}
Coach: ${ticket.coach}
Seats: ${ticket.seats}`
        );
    };

    return (
        <div className="contact">
            <h2>🚆 Train Ticket Booking</h2>

            <form onSubmit={handleSubmit}>
                <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label className="form-label">Passenger Name</label>
    <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Enter Passenger Name"
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
    <label className="form-label">From Station</label>
    <input
        type="text"
        name="from"
        className="form-control"
        placeholder="Enter From Station"
        onChange={handleChange}
    />
    </div>

    <div className="mb-3">
    <label className="form-label">To Station</label>
    <input
        type="text"
        name="to"
        className="form-control"
        placeholder="Enter To Station"
        onChange={handleChange}
    />
    </div>

    <div className="mb-3">
    <label className="form-label">Journey Date</label>
    <input
        type="date"
        name="date"
        className="form-control"
        onChange={handleChange}
    />
    </div>

    <div className="mb-3">
    <label className="form-label">Coach Type</label>
    <input
        type="text"
        name="coach"
        className="form-control"
        placeholder="Sleeper / AC / General"
        onChange={handleChange}
    />
    </div>

    <div className="mb-3">
    <label className="form-label">Number of Seats</label>
    <input
        type="number"
        name="seats"
        className="form-control"
        placeholder="Enter Number of Seats"
        onChange={handleChange}
    />
    </div>

    <button type="submit" className="btn btn-primary w-100">
    Book Ticket
    </button>

</form>
            </form>
        </div>
    );
};

export default BookTicket;