import styled from "styled-components";
import colors from "../../styles/colors";

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  min-height: 60vh;
  padding: 5rem 2rem;

  @media (min-width: 375px) {
    padding: 6rem 3rem;
  }

  @media (min-width: 768px) {
    padding: 7rem 10%;
  }

  @media (min-width: 1026px) {
    grid-template-columns: 5fr 4fr;
  }

  .content {
    grid-row: 2 / 3;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 1 / 2;
      align-self: center;
    }
  }

  .picture {
    grid-row: 1 / 2;
    justify-self: center;
    width: 60%;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 2 / 3;
      width: 100%;
      align-self: center;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 15%);
    background-color: ${colors.black};
    z-index: -1;

    @media (min-width: 1026px) {
      clip-path: polygon(55% 0, 100% 0, 100% 100%, 85% 100%);
    }
  }
`;

export const HeroInner = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;

  @media (min-width: 1026px) {
    grid-template-columns: 5fr 4fr;
  }

  .content {
    grid-row: 2 / 3;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 1 / 2;
      align-self: center;
    }
  }

  .picture {
    grid-row: 1 / 2;
    justify-self: center;
    width: 60%;

    @media (min-width: 1026px) {
      grid-row: unset;
      grid-column: 2 / 3;
      width: 100%;
      align-self: center;
    }
  }
`;

export const SupplementSection = styled.section`
  background-color: ${colors.white};
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 1026px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
