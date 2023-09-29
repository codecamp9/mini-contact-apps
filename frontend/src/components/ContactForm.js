import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ContactForm = () => {
  const [gateName, setName] = useState("");
  const [gatePhone, setPhone] = useState("");
  const [gateNote, setNote] = useState("");

  const inputHandlerName = (name) => {
    return setName(name);
  };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  function saveContact() {
    axios({
      method: "POST",
      url: "http://localhost:8000/api/contacts",
      data: {
        name: gateName,
        phone: gatePhone,
        note: gateNote,
      },
    }).then((resutls) => {
      console.log(resutls);
      if (resutls.data.payload.affectedRows) {
        alert("Contact berhasil ditambahkan ✔");
        window.location.href = "/list-contact";
      } else {
        alert("Contact gagal ditambahkan ❎");
      }
    });
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="name" className="required">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                required="required"
                onChange={(e) => inputHandlerName(e.target.value)}
              />
            </div>
            <div className="col-sm m-10">
              <label htmlFor="phone" className="required">
                Nomor Telepon
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => inputHandlerPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname">Catatan</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => inputHandlerNote(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm m-10">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => saveContact()}
                style={{ cursor: "pointer" }}
              >
                Tambahkan Kontak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
