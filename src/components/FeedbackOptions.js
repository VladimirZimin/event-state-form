import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const ButtonItem = styled.li`
  margin: 0 10px;
`;

const Button = styled.button`
  min-width: 70px;
  padding: 7px 15px;
  font-weight: bold;
  background-color: #24799e;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  outline: none;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((option) => (
        <ButtonItem key={nanoid()}>
          <Button name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
