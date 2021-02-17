import { createGlobalStyle } from 'styled-components'
import GithubImage from '../img/github-background.svg'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #460785 url(${GithubImage}) no-repeat 70% top;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 968px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`