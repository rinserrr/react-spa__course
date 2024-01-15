import styled from "styled-components";


export const StyledSection = styled.section`
  /* Normal (Regular) 400 */
  /* Medium 500 */
  /* Semi Bold (Demi Bold) 600 */
  /* Bold 700 */
  /* Extra Bold (Ultra Bold) 800 */

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Consolas";

    font-display: swap;
    src:
      url("../../src/fonts/consolas.woff") format("woff"),
      url("../../src/fonts/consolas.woff2") format("woff2");
  }

  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: "Consolas";

    font-display: swap;
    src:
      url("../../src/fonts/consolas-bold.woff") format("woff"),
      url("../../src/fonts/consolas-bold.woff2") format("woff2");
  }

  body {
    font-family: "Consolas", "Arial", sans-serif;
  }
`;
