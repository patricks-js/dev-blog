import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  aside {
    flex: 7;

    background-color: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

   padding: 120px 80px;

   img { 
       max-width: 320px;
   }

   strong { 
       font: 700 36px var(--fontPoppins);
       line-height: 42px;
       margin-top: 16px;
   }

   p {
       font-size: 24px;
       line-height: 32px;
       margin-top: 16px;
       color: #f8f8f8;
   }
  }
  main {
    flex: 8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
    }

    > img + button {
        margin-top: 64px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background-color: #ea4335;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        border: 0;

        transition: .3s;

        img {
            margin-right: 8px;
        }

        &:hover {
            filter: brightness(0.9);
        }
    }   

    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;
            background-color: #fff;
            border: 1px solid #a8a8b3;
        }

        button {
            margin-top: 16px; 
        }

        button, input {
            width: 100%;
        }
    }
`

export const Division = styled.div`
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #a8a8b3;
        margin-right: 1rem;
    }

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #a8a8b3;
        margin-left: 1rem;
    }
`