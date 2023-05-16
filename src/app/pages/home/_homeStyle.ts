import { css } from 'emotion';
import { color } from '@/constant/color';

const wrapper = css`
  display: block;
  padding: 10px 10px !important;

  .table-contents {
    width: 100%;
  }
  .create-button {
    margin-bottom: 20px;
  }
  .card-body {
    padding: 10px 10px 10px;
    h4 {
      display: block;
      min-height: 50px;
      line-height: 1.5;
      font-size: 16px;
      font-family: 'Quicksand';
      font-weight: 600;
      margin-bottom: 10px;
      padding-bottom: 10px;
      color: ${color['n-200']};
    }
    h3 {
      padding: 0 0 10px;
      color: ${color['r-100']};
    }
    p {
      color: ${color['n-100']};
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.5;
      min-height: 100px;
    }
  }
`;

export default wrapper;
