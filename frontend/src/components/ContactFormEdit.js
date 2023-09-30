import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactForm = () => {
  const { id } = useParams();
  const [getData, setData] = useState([]);
  const [gateName, setName] = useState("");
  const [gatePhone, setPhone] = useState("");
  const [gateNote, setNote] = useState("");

  // start get datas
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/api/contacts/${id}`,
    }).then((resutls) => {
      console.log("buat edit:", resutls);
      setData(resutls.data.payload);
    });
  }, [id]);
  // end get datas

  // start add
  const inputHandlerName = (name) => {
    return setName(name);
  };

  const inputHandlerPhone = (phone) => {
    return setPhone(phone);
  };

  const inputHandlerNote = (note) => {
    return setNote(note);
  };

  function editContact(id) {
    const nameBaru = gateName;
    const phoneBaru = gatePhone;
    const noteBaru = gateNote;

    getData.map((data) => {
      const nameToSend = nameBaru !== "" ? nameBaru : data.name;
      const phoneToSend = phoneBaru !== "" ? phoneBaru : data.phone;
      const noteToSend = noteBaru !== "" ? noteBaru : data.note;

      axios({
        method: "PATCH",
        url: `http://localhost:8000/api/contacts/${id}`,
        data: {
          name: nameToSend,
          phone: phoneToSend,
          note: noteToSend,
        },
      }).then((resutls) => {
        console.log(resutls);
        if (resutls.data.payload.affectedRows) {
          window.location.href = "/list-contact";
        } else {
          alert("Contact gagal diedit ❎");
        }
      });
    });
  }
  // end add

  return (
    <div>
      {console.log("data edit form", getData)}
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container">
          {getData.map((data, index) => {
            return (
              <div key={index}>
                <div className="row">
                  <div className="col-sm m-10">
                    <label htmlFor="name" className="required">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required="required"
                      onChange={(e) => inputHandlerName(e.target.value)}
                      defaultValue={data.name}
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
                      defaultValue={data.phone}
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
                      defaultValue={data.note}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm m-10">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => editContact(data.id)}
                      style={{ cursor: "pointer" }}
                    >
                      Edit Kontak
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
