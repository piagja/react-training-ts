import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Main = styled.main`
  height: 600px;
  width: 900px;
  background: #6930c3;
  overflow: hidden;

  img {
    height: 100px;
    border-radius: 50%;
    margin: 25px;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 40px;

  &::placeholder {
    color: #252525;
    padding-left: 15px;
  }
`

export const Button = styled.button`
  height: 40px;
  border: none;
  font-size: 14px;
  width: 100px;
`

export const Title = styled.h1`
  font-size: 20px;
  color: #80ffdb;
  margin: 30px;
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;

  &:hover {
    box-shadow: 0px 0px 21px 1px rgba(0,0,0,0.75) inset;
    transform: translateY(2px);
    transition: .4s;
    cursor: pointer;
  }
`

export const Image = styled.img`
  margin-bottom: 40px;
`

export const P = styled.p`
  color: #64dfdf;
  padding-left: 25px;
`