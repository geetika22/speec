import styled from "styled-components";

export const NomineeCardContainer = styled.div`
  text-align: center;
  width: 20rem;
  background-color: #ffe8d6;
  margin: 5rem auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const NomineeImg = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: relative;
  bottom: 5rem;
  margin-bottom: -2.5rem;

  @media screen and (max-width: 425px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const NomineeName = styled.h2`
  padding: 0 2rem;
`;

export const NomineeRollno = styled.h5``;

export const NomineeDept = styled.h5``;

export const NomineeBatch = styled.h5`
  margin-bottom: 1rem;
`;
