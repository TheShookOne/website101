import Header from "../components/Header";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

import React from "react";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <Veggie></Veggie>
      <Popular></Popular>
    </div>
  );
}
export default HomePage;
