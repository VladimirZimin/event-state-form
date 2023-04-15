import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  margin-bottom: 15px;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  font-size: 20px;
  color: #ff6669;
`;

const Value = styled.p`
  font-weight: bold;
  color: #003357;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StatisticInfo = ({ statistics, onCountTotal, onCountTotalPercent }) => {
  const total = onCountTotal();
  const percent = onCountTotalPercent();

  return (
    <Wrapper>
      <List>
        {statistics.map(([key, value]) => {
          return (
            <Item key={nanoid()}>
              <Value>{key}</Value>: {value}
            </Item>
          );
        })}
      </List>

      <Value>Total: {total}</Value>
      <Value>Positive feedback: {percent === 0 ? "0" : percent}%</Value>
    </Wrapper>
  );
};

export default StatisticInfo;
