import { css } from 'emotion';
import { color } from '@/constant/color';

export const topHead = css`
  z-index: 200;
  display: flex;
  background: #fff;
  align-items: center;
  height: 60px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;
  -ms-transition: all 400ms ease-in-out;
  -o-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${color['n-0']};
    -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.12);
    z-index: 202;
  }
  .spare-menu {
    display: flex;
    justify-content: space-between;
  }

  .menu-mobile {
    display: none;
    border: 0px;
    padding: 5px;
    height: 38px;
    width: 38px;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 5px;
  }
  .logo {
    width: 242px;
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 13px;
    .svg {
      height: 28px;
      width: 101px;
    }
  }
  .account {
    display: flex;
    align-items: center;
    padding: 0 20px 0 0;
    font-size: 14px;
    color: ${color['n-80']};
  }

  nav {
    display: flex;
    margin: 0;
    padding: 0;

    .selected-pointer {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      > li {
        display: block;
        margin-left: 16px;
        color: ${color['n-100']};

        &.head_nav {
          display: none;
        }
        a {
          text-decoration: none;
          font-size: 16px;
          color: $gray;
          -webkit-transition: all 200ms ease-in-out;
          -moz-transition: all 200ms ease-in-out;
          -ms-transition: all 200ms ease-in-out;
          -o-transition: all 200ms ease-in-out;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
`;
