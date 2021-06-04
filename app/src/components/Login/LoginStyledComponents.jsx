import styled from "styled-components"


export const Container = styled.div`
padding: 0`;

export const Nav = styled.nav`
 max-width: 80%;
 margin: auto;
 padding: 12px 0 16px;
 display: flex;
 align-items: center;
 position: relative;
 justify-content: space-between;
 flex-wrap: nowrap;

 & > a {
     width: 135px;
     height: 34px;
    @media (max-width: 768) {
        padding: 0 5px;
    }
 }
`;


