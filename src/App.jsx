import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Header from "./Header";
import Register from "./Register";
import BookTicket from "./BookTicket";
import ContactList from "./ContactList";
import ViewContact from "./ViewContact";
import UpdateContact from "./UpdateContact";
import ContactUs from "./ContactUs";

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