import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ContactForm from "./components/ContactForm";
import ListContact from "./components/ListContact";
import ContactFormEdit from "./components/ContactFormEdit";
import "./index.css";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="add-contact" element={<ContactForm />} />
      <Route path="list-contact" element={<ListContact />} />
      <Route path="edit-contact/:id" element={<ContactFormEdit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
