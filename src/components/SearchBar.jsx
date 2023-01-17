import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  position: relative;
  width: 60%;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 65%;
    left: 67%;
    transform: translate(100%, -50%);
    color: white;
    height: 35%;
    width: 20%;
  }
`;

export default SearchBar;
