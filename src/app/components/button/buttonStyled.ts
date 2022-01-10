import styled, { css } from 'styled-components';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
};

export const Button = styled.button<ButtonProps>`
  ${({theme, size = 'small'}) => css`
    width: ${theme.Size[size]};
    cursor: pointer;
    background-color: ${theme.Color.primary};
    color: #FFF;
    border: 0;
    border-radius: 20px;
    transition: 1s;
    hove: {
      background-color: #4a5f6a;
    }
  `}
`;
