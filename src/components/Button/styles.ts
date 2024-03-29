import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color ? color : 'primary']};
    border: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.normal};
    padding: ${
      color === 'warning'
        ? `${theme.spacings.xtiny} ${theme.spacings.xtiny}`
        : `${theme.spacings.xsmall} ${theme.spacings.medium}`
    };
    cursor: pointer;
    border-radius: ${theme.spacings.tiny};
    transition: ${theme.transitions.fast};
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.tiny} ${
    theme.colors[color ? color : 'primary']
  };
      filter: brightness(110%);
    }

    &:hover {
      filter: brightness(90%);
    }

    &:disabled {
      background: ${theme.colors.gray4};
      color: ${theme.colors.gray1};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`;
