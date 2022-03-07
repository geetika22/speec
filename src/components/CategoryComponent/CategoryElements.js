import { Container } from "react-bootstrap";
import styled from "styled-components";

export const CategoryContainer = styled(Container)`
  padding: 0;
  margin-top: 10px;
`;

export const CategoryBackGroundContainer = styled(Container)`
  background-color: #ffffff;
`;

export const SiteName = styled.h1`
  text-align: center;
  margin-top: 3rem;
`;

export const CollegeName = styled.h4`
  text-align: center;
`;

export const CollegeAddress = styled.h6`
  text-align: center;
`;

export const CollegeLogo = styled.img`
  @media screen and (max-width: 767.5px) {
    display: none;
  }
`;

export const CategoryTitle = styled.h1`
  text-align: center;
`;

export const CategorySubheading = styled.h4`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 2.5rem;
`;

export const CategoryImage = styled.img`
  width: 40%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 2s infinite alternate;
`;

export const CategoryCardContainer = styled(Container)`
  text-align: center;
  @media screen and (max-width: 375px) {
    padding: 0;
    overflow-x: hidden;
  }
`;

export const CategoryCard = styled.div`
  width: 20rem;
  background-color: #ffe8d6;
  height: 25rem;
  margin: 2rem auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    margin-top: 1rem;
  }

  @media screen and (max-width: 375px) {
    width: 18rem;
  }
`;

export const CategoryImgWrap = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 20px 20px 0 0;
`;

export const CategoryWrap = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
`;

export const CategoryCardTitle = styled.h4`
  margin-top: 22px;
`;
