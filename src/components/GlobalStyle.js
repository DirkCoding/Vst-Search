import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
   
* {
  box-sizing: border-box;
}

body {
  display:grid;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background:rgb(105, 105, 105);
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
