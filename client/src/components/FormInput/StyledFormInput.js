import styled from "styled-components";
import colors from "../../styles/colors";

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  display: inline-block;
  color: ${colors.black};
`;

export const Input = styled.input`
  display: block;
  color: ${colors.black};
  font-size: inherit;
  background-color: ${colors.mediumGrey};
  border: 2px solid ${colors.mediumGrey};
  border-color: ${(props) => (props.error ? colors.red : colors.lightGrey)};
  height: 55px;
  padding: 15px;
  width: 100%;
  outline: none;
  border-radius: 5px;

  &:focus {
    border-color: ${colors.blue};
  }

  &::placeholder {
    color: inherit;
    opacity: 0.1;
    font-style: italic;
    font-size: inherit;
  }
`;
