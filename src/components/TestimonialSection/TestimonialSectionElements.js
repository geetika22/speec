import styled from 'styled-components';

export const Testimonydiv = styled.div`
   width:100%;
   min-height: 40rem ;
   padding: 0rem 2rem; 

`

export const Testimony = styled.div`
    background-color: #F9F6F7;
    margin: 3rem 2rem;
    height:100%;  
    width: 90%;
    border-radius:20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    @media screen and (max-width: 991px) {
        height: 100%;
        margin: 5px auto;
        margin-bottom: 2rem;
    }
`
export const TestimonyHeading = styled.h4`
    margin-top: 1rem; 
    text-align: center ;
    padding: 1rem;
    font-weight: bolder;
`

export const TestimonyContent = styled.p`
    padding: 3rem;
`
