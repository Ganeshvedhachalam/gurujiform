import { useState } from "react";

function Form() {
  const [step, setStep] = useState(1);
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    Setformdata({ ...formdata, [name]: value });
  };
  const HandleNext = (e) => {
    setStep((prev) => prev + 1);
  };
  const HandlePrev = (e) => {
    setStep((prev) => prev - 1);
  };
  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <>
      <h1>Guruji Astro</h1>
      <form onSubmit={""}>
        {step === 1 && (
          <div>
            <h1>Personal Details</h1>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formdata.name}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formdata.email}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>phone</label>
            <input
              name="phone"
              type="tel"
              value={formdata.phone}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
          </div>
        )}

        <br></br>

        {step === 2 && (
          <div>
            <h2>Address Information </h2>
            <label>Address Line 1 </label>
            <input
              name="address1"
              type=""
              value={formdata.address1}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>Address Line 2 </label>
            <input
              name="address2"
              type=""
              value={formdata.address2}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>City</label>
            <input
              name="city"
              type="text"
              value={formdata.city}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>State</label>
            <input
              name="state"
              type="text"
              value={formdata.state}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
            <label>Zip Code</label>
            <input
              name="zip"
              type="number"
              value={formdata.zip}
              placeholder=""
              required
              onChange={HandleChange}
            />
            <br></br>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1>Confirmation</h1>
            <p>
              <strong>Name</strong> {formdata.name}{" "}
            </p>
            <p>
              <strong>Email</strong> {formdata.email}{" "}
            </p>
            <p>
              <strong>Phone</strong> {formdata.phone}{" "}
            </p>
            <p>
              <strong>Address1</strong> {formdata.address1}{" "}
            </p>
            <p>
              <strong>Address2</strong> {formdata.address2}{" "}
            </p>
            <p>
              <strong>City</strong> {formdata.city}{" "}
            </p>
            <p>
              <strong>State</strong> {formdata.state}{" "}
            </p>
            <p>
              <strong>Zip</strong> {formdata.zip}{" "}
            </p>
          </div>
        )}

        <div>
          {step > 1 && <button onClick={HandlePrev}>back</button>}
          {step < 3 && <button onClick={HandleNext}>next</button>}
          {step === 3 && <button onClick={handleSubmit}>submit</button>}
        </div>
      </form>
    </>
  );
}
export default Form;
