import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={500}
        title="₹0-500"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={1000}
        title="₹500-1000"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={2000}
        title="₹1000-2000"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={3000}
        title="Over ₹3000"
        name="test2"
      />
    </div>
  );
}

export default Price;
