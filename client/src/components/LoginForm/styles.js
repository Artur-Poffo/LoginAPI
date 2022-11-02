import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background-color: #eee;
  color: #123;
  box-shadow: 50px 0px 20px black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 400px;
    height: 400px;
    box-shadow: none;
    z-index: 999;
  }

  form {
    h2 {
      margin-bottom: 40px;
    }

    div {
      label {
        font-weight: bolder;
      }

      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        height: 40px;
        background: transparent;
        border: 1px solid #123;
        border-radius: 5px;
        padding: 10px;
        transition: all .5s ease;

        &:hover, &:focus {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
      }
    }
  }
`

export const Button = styled.button`
  margin: 20px 0;
  border: 1px solid #123;
  padding: 12px 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    background-color: #123;
    color: #eee;
  }
`