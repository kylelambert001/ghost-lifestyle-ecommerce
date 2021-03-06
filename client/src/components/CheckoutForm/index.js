import React from "react";
import * as S from "./StyledCheckoutForm.js";

import { useAlertContext } from "../../contexts/AlertContext";

import FormInput from "../../components/FormInput";

function CheckoutForm({ continueToPayment }) {
  const { addAlert } = useAlertContext();
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalCode: "",
    state: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const stateArray = Object.values(state).map(([value]) => value);
    if (stateArray.every((cur) => cur)) {
      continueToPayment();
    } else {
      addAlert({
        title: "Shipping details",
        msg: "Please fill out your shipping information before proceeding to checkout.",
      });
    }
    return;
  };

  return (
    <S.Form>
      <div className="fname">
        <FormInput
          label="First Name"
          name="firstName"
          value={state.firstName}
          handleChange={handleChange}
          placeholder="Mike"
        />
      </div>
      <div className="lname">
        <FormInput
          label="Last Name"
          name="lastName"
          value={state.lastName}
          handleChange={handleChange}
          placeholder="Smith"
        />
      </div>
      <div className="email">
        <FormInput
          label="Email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          placeholder="mikesmith@gmail.com"
        />
      </div>
      <div className="address">
        <FormInput
          label="Address"
          name="address"
          value={state.address}
          handleChange={handleChange}
          placeholder="26 Wright St, Woodville"
        />
      </div>
      <div className="postalCode">
        <FormInput
          label="Postal Code"
          name="postalCode"
          value={state.postalCode}
          handleChange={handleChange}
          placeholder="5013"
        />
      </div>
      <div className="state">
        <FormInput
          label="State"
          name="state"
          value={state.state}
          handleChange={handleChange}
          placeholder="SA"
        />
      </div>
      <div className="city">
        <FormInput
          label="City"
          name="city"
          value={state.city}
          handleChange={handleChange}
          placeholder="Adelaide"
        />
      </div>
      <div className="country">
        <FormInput
          label="Country"
          name="country"
          value={state.country}
          handleChange={handleChange}
          placeholder="Australia"
        />
      </div>
      <div className="submit">
        <S.PurchaseButton onClick={handleClick}>
          <span className="span">Continue to Stripe Payments</span>
        </S.PurchaseButton>
      </div>
    </S.Form>
  );
}

export default CheckoutForm;
