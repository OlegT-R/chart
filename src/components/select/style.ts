import { createStyle } from "../chart/utils/style";

const css = `
.select {
width: 100%;
    position: relative;
}
 .select select {
    display: block;
    width: 100%; 
    padding: .75rem 2.5rem .75rem 1rem;
    background: none; 
    border: 1px solid #ccc;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: inherit;
    font-size: 1rem;
    color: #444;
}
 .select:after {
    content: "";
    display: block;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #000 transparent transparent transparent;
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 1rem;
    z-index: 1;
    margin-top: -3px;
}
`;

export default createStyle(css);
