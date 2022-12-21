import React from "react";

const AddressForm = (props) => {
  return (
    <section className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">General Infomation</h3>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="2">Mr</option>
                          <option value="3">Mrs</option>
                          <option value="4">Miss</option>
                        </select>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplev2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplev2">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplev3"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplev3">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 bg-indigo">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Examplea2">
                            House Id
                          </label>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Examplea2">
                            Street
                          </label>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="form3Examplea3"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Examplea3">
                            City
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea4"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea4">
                              City
                            </label>
                          </div>
                        </div>
                        <div className="col-md-7 mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea5"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea5">
                              Zip code
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="form3Examplea6"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Examplea6">
                            Country
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-7 mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="form3Examplea8"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="form3Examplea8">
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
