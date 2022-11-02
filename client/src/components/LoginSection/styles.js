import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
`

export const Image = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .4;

  @media (max-width: 1000px) {
    position: absolute;
    width: 100%;
  }
`