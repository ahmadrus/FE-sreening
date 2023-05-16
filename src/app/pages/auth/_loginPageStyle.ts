import { css } from 'emotion';
import { color } from '@/constant/color';

export const wrapperLogin = css`
  &.wrapper {
    display: flex;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    text-align: center;
    margin-top: 50px;
  }

  h2 {
    font-weight: 500;
    margin-bottom : 10px
  }
  .msg-error {
      padding 20px; 
      border-radius: 10px;
      background : ${color['r-25']};
      border : solid 1px ${color['r-50']};
  }
  form {
    width: 300px;
    display: inline-block;
    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 2rem;
    margin: 1rem 0 1rem 0;
    label {
      float: left;
      font-size: 0.9rem;
      margin: 0;
      padding: 0;
    }
  }

  .right-label {
    float: right;
    cursor: pointer;
  }

  input {
    width: 100%;
    margin: 10px 0;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: ${color['n-100']};
    vertical-align: middle;
    background-color: ${color['n-0']};
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid ${color['n-50']};
    border-radius: 6px;
    box-shadow: 0 0 0 0.2 ${color['n-100']};
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, background-color, box-shadow, border-color;
  }

  #sub_btn {
    display: block;
    width: 100%;
    padding: 0.3rem;
    border: none;
    background: #222;
    color: #fff;
    border-radius: 3px;
    &:hover {
      background: #333;
      transition: all 0.5s;
    }
  }

  footer p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
