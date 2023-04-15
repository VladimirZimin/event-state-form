import styled from "styled-components";

const StyleSection = styled.section`
  padding-bottom: 40px;
`;

const StyleTitle = styled.h3`
  margin-bottom: 30px;
  padding-top: 15px;
  padding-left: 25px;
  padding-bottom: 10px;
  border-top: 1px solid gray;
  background-color: #0f0534;
  color: white;
`;

export default function Section({ title, children }) {
  return (
    <StyleSection>
      {title && <StyleTitle>{title}</StyleTitle>}
      {children}
    </StyleSection>
  );
}
