import styled from "styled-components";
import colors from "../../styles/colors";

export const ImageWrapper = styled.div`
  flex-basis: 105px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  flex-basis: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    padding: 0.5rem;
    color: ${colors.black};
    background-color: transparent;
    transition: transform 150ms ease;

    &:hover {
      transform: scale(1.25);
      transition: transform 150ms ease;
    }
  }
`;

export const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  color: ${colors.black};
  line-height: 1.6;
`;

export const Text = styled.span`
  display: block;
  color: ${colors.black};
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: 400;
`;
