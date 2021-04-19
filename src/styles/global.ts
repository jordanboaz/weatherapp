
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing:  border-box;
}

:root {
  --white: #FFFFFF;

  --blue-200: #0e7bf0;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --cyan-500: #61dafb;
  --yellow-500: #eba417;
}

 
  @media (max-width: 1080px) {
    html {
      font-size: 93.75% // 15px
    }
  }

  @media (max-width: 720px) {
    html{
      font-size: 87.5% // 14px
    }
  }
 

body {
  background:var(--white);
  color: var(--gray-900);
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`