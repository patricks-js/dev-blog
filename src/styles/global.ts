import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Presets */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    :root {
        --fontRoboto:  'Roboto', sans-serif;
        --fontPoppins: 'Poppins', sans-serif;
    }

    body {
        background-color: #f8f8f8;
        color: #29292e;
    }

    body, input, button, textarea {
        font: normal 400 16px var(--fontRoboto);
    }

`;
