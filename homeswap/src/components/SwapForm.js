import React from "react";
import { dutchProvinces } from "../content.js";
import { dutchCities } from "../cities.js";
import "../css/profile.css";
import ErrorMessage from "../components/ErrorMessage.js";

import axios from "axios";

class SwapForm extends React.Component {
  state = {
    userHouse: {
      province: "",
      municipality: "",
      district: "",
      zipcode: "",
      hometype: "",
      floor: 0,
      rooms: 0,
      area: 0,
      rent: 0,
      features: "",
      facilities: "",
      description: "",
    },

    requestedHouse: {
      province: "",
      municipality: "",
      district: "",
      zipcode: "",
      hometype: "",
      floor: 0,
      rooms: 0,
      area: 0,
      rent: 0,
      features: "",
      facilities: "",
      description: "",
    },
    success: false,
    error: null,
  };

  sendAdRequest = async (e) => {
    e.preventDefault();

    let { userHouse, requestedHouse } = this.state;
    let { _id } = this.props.user;

    let response = await axios.post("/api/homes/create", {
      _id,
      userHouse,
      requestedHouse,
    });
    if (!response.data.error) {
      this.setState({ success: true });
      this.props.getAllHomes();
    } else {
      this.setState({ error: "Something went wrong" });
    }
  };

  render() {
    return (
      <div className="homeswap-form">
        <form>
          <h3>Your rental house and requested house information </h3>
          {this.state.error && <ErrorMessage error={this.state.error} />}
          <div className="container-column">
            {" "}
            <label for="province">Province:*</label>
            <div className="container-row">
              <select
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      province: e.target.value,
                    },
                  }))
                }
                required
                name="province"
                id="province"
              >
                <option value="" disabled selected>
                  Select your province
                </option>
                {dutchProvinces.map((province) => {
                  return <option value={province}>{province}</option>;
                })}
              </select>
              <select
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      province: e.target.value,
                    },
                  }))
                }
                required
                name="province"
                id="province"
              >
                <option value="" disabled selected>
                  Requested province
                </option>
                {dutchProvinces.map((province) => {
                  return <option value={province}>{province}</option>;
                })}
              </select>
            </div>
          </div>

          <hr />
          <div className="container-column">
            <label for="municipality">Municipality:*</label>
            <div className="container-row">
              <select
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      municipality: e.target.value,
                    },
                  }))
                }
                required
                name="municipality"
                id="municipality"
              >
                <option value="" disabled selected>
                  Select your municipality
                </option>
                {dutchCities.map((city) => {
                  return <option value={city.city}>{city.city}</option>;
                })}
              </select>

              <select
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      municipality: e.target.value,
                    },
                  }))
                }
                required
                name="municipality"
                id="municipality"
              >
                <option value="" disabled selected>
                  Requested municipality
                </option>
                {dutchCities.map((city) => {
                  return <option value={city.city}>{city.city}</option>;
                })}
              </select>
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label for="district">District: </label>
            <div className="container-row">
              {" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      district: e.target.value,
                    },
                  }))
                }
                placeholder="Enter your district"
                type="text"
              />{" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      district: e.target.value,
                    },
                  }))
                }
                type="text"
                placeholder="Enter requested district"
              />
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Your Zip Code</label>
            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      zipcode: e.target.value,
                    },
                  }))
                }
                type="text"
                id="country_code"
                name="country_code"
                pattern="[0-9]{4}[A-Za-z]{2}"
                title="4 numbers 2 letters zip code"
                placeholder="4 digit 2 letter zipcode"
              ></input>
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      zipcode: e.target.value,
                    },
                  }))
                }
                placeholder="4 digit 2 letter zipcode"
                type="text"
                id="country_code"
                name="country_code"
                pattern="[0-9]{4}[A-Za-z]{2}"
                title="4 numbers 2 letters zip code"
              ></input>
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>The Home type* </label>
            <div className="container-row">
              {" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      hometype: e.target.value,
                    },
                  }))
                }
                placeholder="Enter your home type"
                required
                type="text"
              ></input>
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      hometype: e.target.value,
                    },
                  }))
                }
                placeholder="Enter requested home type"
                required
                type="text"
              ></input>
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Floor </label>
            <div className="container-row">
              {" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      floor: e.target.value,
                    },
                  }))
                }
                type="number"
                min="0"
              ></input>
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      floor: e.target.value,
                    },
                  }))
                }
                type="number"
                min="0"
              ></input>
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Number of rooms:* </label>
            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      rooms: e.target.value,
                    },
                  }))
                }
                required
                type="number"
                min="0"
              ></input>
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      rooms: e.target.value,
                    },
                  }))
                }
                required
                type="number"
                min="0"
              ></input>
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Living area: </label>

            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      area: e.target.value,
                    },
                  }))
                }
                type="number"
              />
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      area: e.target.value,
                    },
                  }))
                }
                type="number"
              />
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Rent:* </label>
            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      rent: e.target.value,
                    },
                  }))
                }
                required
                placeholder="Enter current rent"
                type="text"
              />{" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      rent: e.target.value,
                    },
                  }))
                }
                required
                type="text"
                placeholder="Maximum rent you want to pay"
              />{" "}
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Property features:* </label>
            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      features: e.target.value,
                    },
                  }))
                }
                required
                type="text"
              />{" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      features: e.target.value,
                    },
                  }))
                }
                required
                type="text"
              />
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Facilities nearby:* </label>
            <div className="container-row">
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      facilities: e.target.value,
                    },
                  }))
                }
                required
                type="text"
              />{" "}
              <input
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      facilities: e.target.value,
                    },
                  }))
                }
                required
                type="text"
              />
            </div>
          </div>
          <hr />
          <div className="container-column">
            <label>Description:* </label>
            <div className="container-row">
              <textarea
                required
                onChange={(e) =>
                  this.setState((prevState) => ({
                    userHouse: {
                      ...prevState.userHouse,
                      description: e.target.value,
                    },
                  }))
                }
              ></textarea>{" "}
              <textarea
                required
                onChange={(e) =>
                  this.setState((prevState) => ({
                    requestedHouse: {
                      ...prevState.requestedHouse,
                      description: e.target.value,
                    },
                  }))
                }
              ></textarea>
            </div>
          </div>
          <button onClick={(e) => this.sendAdRequest(e)}>
            {this.state.success ? "Complete" : "Submit"}
          </button>
        </form>
        {/* <form>
          <p>Requested property Details</p>
          <div>
            <label for="province">Province:</label>
            <select name="province" id="province">
              <option value="" disabled selected>
                Select province
              </option>
              {dutchProvinces.map((province) => {
                return <option value={province}>{province}</option>;
              })}
            </select>
          </div>
  
          <div>
            <label for="municipality">Municipality:</label>
            <select name="municipality" id="municipality">
              <option value="" disabled selected>
                Select your municipality
              </option>
              {dutchCities.map((city) => {
                return <option value={city.city}>{city.city}</option>;
              })}
            </select>
          </div>
          <div>
            <label for="district">District: </label>
            <input type="text" />
          </div>
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              id="country_code"
              name="country_code"
              pattern="[0-9]{4}[A-Za-z]{2}"
              title="4 numbers 2 letters zip code"
            ></input>
          </div>
          <div>
            <label>The Home type: </label>
            <input type="text"></input>
          </div>
          <div>
            <label>Floor: </label>
            <input type="number" min="0"></input>
          </div>
          <div>
            <label>Number of rooms: </label>
            <input type="number" min="0"></input>
          </div>
          <div>
            <label>Living area:: </label>
            <div>
              <input type="number" min="0"></input>-
              <input type="number" min="0"></input> m2
            </div>
          </div>
          <div>
            <label>Rent: </label>
            € <input type="text" />
          </div>
          <div>
            <label>Property features: </label>
            <input type="text" />
          </div>
          <div>
            <label>Facilities nearby: </label>
            <input type="text" />
          </div>
          <div>
            <label>Description: </label>
            <textarea></textarea>
          </div>
        </form> */}
      </div>
    );
  }
}

export default SwapForm;
