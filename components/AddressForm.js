import React from "react";
import styles from "./AddressForm.module.scss";
import { useRouter } from "next/router";

const AddressForm = (props) => {
  const router = useRouter();
  console.log("addressForm ID " + props.id);

  const handleClick = (newAddress) => {
    props.onAddressUpdate(newAddress);
    props.closeCart();
    router.push("/account");
  };

  const saveData = async () => {
    var houseId = document.getElementById("houseId").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zipCode").value;
    var country = document.getElementById("country").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    let data = {
      email: props.email,
      name: props.name,
      houseId: houseId,
      street: street,
      city: city,
      zipCode: zipCode,
      country: country,
      phoneNumber: phoneNumber,
      accountId: props.id,
    };

    console.log(data);

    const response = await fetch("/api/addAddress", {
      method: "POST",
      body: JSON.stringify(data),
    });

    var res = await response.json();
    console.log("Address has been uploaded   :" + res);

    let newAddress = {
      houseId: houseId,
      street: street,
      city: city,
      zipCode: zipCode,
      country: country,
      phoneNumber: phoneNumber,
      accountId: props.id,
    };

    handleClick(newAddress);
  };

  return (
    <div className={`${styles.container} ${props.isOpen ? styles.active : ""}`}>
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
                    <div className="col-lg-6 bg-indigo">
                      <div className="p-5">
                        <h3 className="fw-normal mb-5">Contact Details</h3>

                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="houseId"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              House Id
                            </label>
                          </div>
                        </div>

                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="street"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Street
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="city"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea4"
                              >
                                City
                              </label>
                            </div>
                          </div>
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="zipCode"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea5"
                              >
                                Zip code
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="country"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              hmtlfor="form3Examplea6"
                            >
                              Country
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="phoneNumber"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea8"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="btn btn-light btn-lg m-2"
                          data-mdb-ripple-color="dark"
                          onClick={saveData}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-light btn-lg"
                          data-mdb-ripple-color="dark"
                          onClick={handleClick}
                        >
                          Cancel
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
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default AddressForm;
