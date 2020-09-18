import { createGlobalStyle } from "styled-components";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');				
	::selection {
		color: ${Theme.colors.primary};
		background: ${Theme.colors.bg};
	}

    html {
		height: 100%;
	}

	body,#root {
	}
	  
	body {
		margin:0;
		
		color: ${Theme.colors.primary};
		font-family: 'Titillium Web', sans-serif;
	}
   
	h1, h2, h3, h4 {
		color: ${Theme.colors.white};
	}

	label {
		margin-bottom: .5rem;
		color: ${Theme.colors.secondary};
	}

	input, textarea {
		border-radius: .5rem;
		border: none;
		background: rgba(0, 0, 0, 0.05);
		padding: .25rem 1rem;
		&:focus {
			outline: none;
		}
	}
`;

export default GlobalStyle;
