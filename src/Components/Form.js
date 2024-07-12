import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import profile from "../../src/assets/guruji-astro-squarelogo.webp";
import "./form.css";

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  // Load form data from local storage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    
    if (
      (step === 1 && formData.name && formData.email && formData.phone) ||
      (step === 2 &&
        formData.address1 &&
        formData.address2 &&
        formData.state &&
        formData.city &&
        formData.zip)
    ) {
      e.preventDefault();
      if (formData.name && formData.email) {
        if (formData.phone.length !== 10) {
          enqueueSnackbar("phone number must be 10 digit", {
            variant: "error",
          });
        } else {
          setStep((prev) => prev + 1);
          enqueueSnackbar(" next section!", { variant: "info" });
        }
      }
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
    enqueueSnackbar(" previous section!", { variant: "info" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission tasks
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    localStorage.removeItem("formData");
    setStep(1);
    enqueueSnackbar("Form submitted successfully!", { variant: "success" });
  };

  return (
    <>
      <div className="container">
        <img
          src={profile}
          alt="Logo"
          style={{ marginTop: "5px" }}
          width={100}
          height={100}
        />

        <form onSubmit={handleSubmit}>
          <h2
            style={{
              color: "orange",
              margin: "5px",
              textShadow: "1px 0 blue, -1px 0 blue, 0 1px blue, 0 -1px blue",
            }}
          >
            Guruji Astro
          </h2>
          {step === 1 && (
            <div className="info">
              <h1>Personal Details</h1>
             <div className="formlab"> <div style={{width:"100px"}}><label>Name</label></div>
             <div><input
                name="name"
                type="text"
                value={formData.name}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"100px"}}><label>Email</label></div>
             <div><input
                name="email"
                type="email"
                value={formData.email}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"100px"}}><label>Phone</label></div>
             <div><input
                name="phone"
                type="text"
                pattern="[0-9]{10}"
                value={formData.phone}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
            </div>
          )}

          <br />

          {step === 2 && (
            <div className="address">
              <h2>Address Information</h2>
             <div className="formlab"> <div style={{width:"150px"}}><label>Address Line 1</label></div>
             <div><input
                name="address1"
                type="text"
                value={formData.address1}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"150px"}}><label>Address Line 2</label></div>
             <div><input
                name="address2"
                type="text"
                value={formData.address2}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"150px"}}><label>City</label></div>
             <div><input
                name="city"
                type="text"
                value={formData.city}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"150px"}}><label>State</label></div>
             <div><input
                name="state"
                type="text"
                value={formData.state}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
             <div className="formlab"> <div style={{width:"150px"}}><label>Zip Code</label></div>
             <div><input
                name="zip"
                type="number"
                value={formData.zip}
                placeholder=""
                required
                onChange={handleChange}
              /></div> </div>
              <br />
            </div>
          )}

          {step === 3 && (
            <div   className="confirmation">
              <h1 style={{}}>Confirmation</h1>
              <p>
                <strong>Name : </strong> {formData.name}</p>
              <p>
                <strong>Email : </strong> {formData.email}</p>
              <p>
                <strong>Phone : </strong> {formData.phone}</p>
              <p>
                <strong>Address1 : </strong> {formData.address1}</p>
              <p>
                <strong>Address2 : </strong> {formData.address2}</p>
              <p>
                <strong>City : </strong> {formData.city}</p>
              <p>
                <strong>State : </strong> {formData.state}</p>
              <p>
                <strong>Zip : </strong> {formData.zip}</p>
            </div>
          )}

          <div className="buttons">
            <button onClick={handlePrev} disabled={step === 1}>Back</button>
            {step < 3 && <button onClick={handleNext}>Next</button>}
            {step === 3 && <button type="submit">Submit</button>}
          </div>
        
        </form>
      </div>
    </>
  );
}

export default Form;
