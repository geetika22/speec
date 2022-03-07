import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f9f6f7;
  height: 40rem;
`;

export const DashboardCardContainer = styled.div`
  background-color: #ffe8d6;
  width: 22rem;
  text-align: center;
  height: 20rem;
  padding-top: 6rem;
  margin-top: 10rem;
  margin-left: 5rem;
  border-radius: 2rem;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  @media screen and (max-width: );
`;

export const DashboardTitle = styled.h1`
  margin-bottom: 3rem;
`;

export const DashboardImage = styled.img`
  width: 65%;
  margin-top: 6rem;
  margin-left: 5rem;
`;
