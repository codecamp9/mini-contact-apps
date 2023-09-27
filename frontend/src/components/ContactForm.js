import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ContactForm = () => {
  const [getFullName, setFullName] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getNote, setNote] = useState("");

  const inputHandlerFullName = (fullname) => {
    return setFullName(fullname);
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
      url: "http://localhost:3001/api/contacts",
      data: {
        fullname: getFullName,
        phone: getPhone,
        note: getNote,
      },
    }).then((results) => {
      console.log(results);
      if(results.data.payload.affectedRows){
        alert("data berhasil ditambahkan ✅");
        window.location.href = "/list-contact";
      }else{
        alert("data gagal ditambahkan ❌");
        window.location.reload();
      }
    })
  }

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm m-10">
              <label htmlFor="fullname" className="required">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                required="required"
                onChange={(e) => inputHandlerFullName(e.target.value)}
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
