import { createStyle } from "../chart/utils/style";

const css = `
  .btn {
    width: 100%;
    color: #1950bb;
    border: 1px solid #1950bb;
    background-color: #fff;
    padding: 0.75em 1em;
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    font: 16px "Helvetica Neue", Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color .2s, color .2s, border-color .2s;
  }
  
  button.is-active {
    background-color: #1950bb;
    color: #fff;
    }
    
    .btn-block{
    display: block;
    }
`;

export default createStyle(css);
