import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
  * {
    box-sizing: border-box;
  }
  html,
  body,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  dfn,
  del,
  p,
  blockquote,
  fieldset,
  input,
  textarea,
  select,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  button,
  canvas,
  video {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  address,
  caption,
  cite,
  code,
  th,
  dfn,
  del {
    font-weight: normal;
    font-style: normal;
  }
  ul,
  ol {
    list-style: none;
  }
  fieldset,
  img {
    border: none;
  }
  caption,
  th {
    text-align: left;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input[type="button"],
  input[type="submit"],
  input[type="reset"],
  button {
    cursor: pointer;
  }
  input[type="button"],
  input[type="submit"],
  input[type="reset"],
  button,
  input[type="search"],
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="number"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }
  input,
  button,
  textarea {
    line-height: normal;
    font-family: "Nunito";
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input[type="hidden"],
  [hidden],
  .hidden {
    display: none;
  }
  textarea {
    overflow: auto;
    resize: none;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  nav,
  section,
  .clearfix {
    display: block;
  }
  audio,
  canvas,
  video {
    display: inline-block;
  }
  a > img {
    vertical-align: bottom;
  }
  strong,
  .strong,
  b {
    font-weight: bold;
  }
  em,
  .italic,
  i {
    font-style: italic;
  }
  del,
  .del {
    text-decoration: line-through;
  }
  :focus {
    outline: none;
  }
  img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  .clear {
    clear: both;
    display: block;
    line-height: 0;
    height: 0;
    font-size: 0;
  }
  .clearfix:after,
  .wrap:after,
  .spanning:after,
  .content:after,
  .main:after,
  aside:after,
  section:after,
  article:after,
  .text:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size: 0;
  }
  
  .overflow-hidden {
    overflow: hidden;
    display: block;
  }

  a {
    text-decoration: none;
  }

  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{
    margin:0;
    font-family: 'Poppins', sans-serif;
    font-weight : 300;
  }
  main{display:block}
  h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none},

          `}
    />
  );
}

export default GlobalStyle;
