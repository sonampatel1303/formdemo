import React, { useState } from "react";
import "../components/controlledform.css";
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Validate = () => {
    
        let formErrors = {};
        formErrors.email = formData.email ? "" : "Email Required.";
        formErrors.password = formData.password ? "" : "Please enter the Password";
        setErrors(formErrors);
        if (Object.keys(formErrors).length > 0) return false;
        else return true;
   
  };
  const handleSubmit = (e) => {
    console.log("handleSubmit function called");
    e.preventDefault();
    const isValid = Validate();
    console.log("Validation result:", isValid);
    if (isValid) {
      console.log("Validate function called");
      console.log(`formData: ${JSON.stringify(formData)}`);
    } else {
      console.log("Form errors:", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;