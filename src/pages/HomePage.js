import Header from "../components/Header";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Category from "../components/Category";
import styled from "styled-components";

import React from "react";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <Category></Category>
      <CarasoulWrapper>
        <Veggie></Veggie>
        <Popular></Popular>
      </CarasoulWrapper>
    </div>
  );
}

const CarasoulWrapper = styled.div`
  margin: 0% 20%;
`;
export default HomePage;
