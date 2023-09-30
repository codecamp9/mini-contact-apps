import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import axios from "axios";

const ListContact = () => {
  const [getDatas, setDatas] = useState([]);

  useEffect(() => {
    console.log("get all datas from API contacts");
    axios({
      method: "GET",
      url: "http://localhost:8000/api/contacts",
    }).then((resutls) => {
      console.log(resutls);
      setDatas(resutls.data.payload);
    });
  }, []);

  function edit(id) {
    axios({
      method: "GET",
      url: `http://localhost:8000/api/contacts/${id}`,
    }).then((resutls) => {
      console.log("datas buat edit ", resutls);
    });
  }

  function hapus(id) {
    const isConfrim = window.confirm("Yakin ingin menghapus kontak ini?");

    if (isConfrim) {
      axios({
        method: "DELETE",
        url: `http://localhost:8000/api/contacts/${id}`,
      }).then((resutls) => {
        if (resutls.data.payload.affectedRows) {
          window.location.reload();
        } else {
          alert("gagal di hapus ❎");
        }
      });
    }
  }

  return (
    <div>
      {console.log("get all data ", getDatas)}
      <NavigationBar />
      <div style={{ marginTop: 65 }}>
        <div className="container-fluid">
          <h3 className="text-center">Daftar Kontak Saya</h3>
          <div className="w-full mw-full">
            <div className="card p-0 bg-very-dark-dm">
              <div className="table-responsive">
                <table className="table table-inner-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name Lengkap</th>
                      <th>Nomor Telepon</th>
                      <th>Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getDatas.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th> {index + 1} </th>
                          <td> {data.name} </td>
                          <td> {data.phone} </td>
                          <td>
                            <div className="row">
                              <div className="col-10"> {data.note} </div>
                              <div className="col-1">
                                <Link to={`/edit-contact/${data.id}`}>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => edit(data.id)}
                                  >
                                    🔍
                                  </span>
                                </Link>
                              </div>
                              <div className="col-1">
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={() => hapus(data.id)}
                                >
                                  ❌
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContact;
