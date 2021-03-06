import styled from "styled-components";
import colors from "../../styles/colors";

export const Banner = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${(props) => (props.copyright ? colors.darkGrey : colors.black)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: ${colors.white};
  font-size: 1.4rem;
  opacity: 0.6;
  text-align: center;
  line-height: 1.3;

  span {
    font-weight: 500;
    color: ${colors.white};
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
