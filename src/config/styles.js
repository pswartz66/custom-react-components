// enables sharing css across multiple components
// just import property into whatever component you'd like
// ex. import { font, primaryColors, shape } from "../config/styles";
import { css } from "@emotion/core";

export const font = css`
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 4px;
`;

export const shape = css`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
`;

export const primaryColors = css`
    background: #5cdb95;
    color: #05385b;
`;

