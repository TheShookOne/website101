import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  let [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_APIKEY}`
    );
    const recipeDetails = await data.json();
    setDetails(recipeDetails);
    console.log(recipeDetails);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <Info>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <div>
          <h3 dangerousLySetInnerHTML={{ __html: details.summary }}>
            {details.summary}
          </h3>
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3 {
    font-size: 2rem;
    color: rgb(56, 56, 56);
    text-align: left;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    font-style: oblique;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 20rem;
  margin-left: 20rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem; ;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
