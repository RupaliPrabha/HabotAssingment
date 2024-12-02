import React from "react";
import Header from "../Components/Header/Header";
import SignUp from "../Components/Signup/Signup";
import BuySupplier from "../Components/BuySupplier/BuySupplier";
import GetVerified from "../Components/GetVerified/GetVerified";
import HowWorks from "../Components/HowWorks/HowWorks";

function MainPage() {
  return (
    <div>
      <Header />
      <SignUp />
      <BuySupplier />
      <GetVerified />
      <HowWorks />
    </div>
  );
}

export default MainPage;
