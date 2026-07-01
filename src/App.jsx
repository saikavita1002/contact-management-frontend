import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Register from "./Register.jsx";
import BookTicket from "./BookTicket.jsx";
import ContactList from "./ContactList.jsx";
import ViewContact from "./ViewContact.jsx";
import UpdateContact from "./UpdateContact.jsx";
import ContactUs from "./ContactUs.jsx";

function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/sign-up";

  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/BookTicket" element={<BookTicket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactlist" element={<ContactList />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/view-contact/:id" element={<ViewContact/>} />
        <Route path="/Update-contact/:id" element={<UpdateContact/>} />
      </Routes>

      {!hideLayout && (
        <footer>
          <h3>Footer Section</h3>
        </footer>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}