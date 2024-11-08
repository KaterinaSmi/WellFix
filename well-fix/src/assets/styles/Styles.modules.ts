import styled from "styled-components";

/* Styles for NavbarWrapper */
export const NavbarWrapper = styled.div`
  .logo {
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 2px;
    background: -webkit-linear-gradient(to right, #007BFF, #F8EBD0); /* Blue to Sandy */
    background: -moz-linear-gradient(to right, #007BFF, #F8EBD0);
    background: -o-linear-gradient(to right, #007BFF, #F8EBD0);
    background: linear-gradient(to right, #007BFF, #F8EBD0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Roboto Slab", serif;
    padding: 0;
    margin: 0;
    display:flex;
    justify-content: space-between; /* Ensure space between logo and tabs */
     
  }

  @media (max-width: 600px) {
    .logo {
      font-size: 1.5rem; /* Adjust font size for smaller screens */
    }
  }
`;
