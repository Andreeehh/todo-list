import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input[type='checkbox'] {
      transform: scale(1.6);
      transition: transform 0.2s ease;
      margin-left: ${theme.spacings.large};
      @media ${theme.media.lteOrEqMedium} {
        margin-left: ${theme.spacings.small};
    }
    }

    input[type='checkbox']:checked {
      transform: scale(2);
    }

    input[type='checkbox']:hover {
      filter: brightness(90%);
    }


    span {
      font-family: ${theme.font.family.secondary};
      font-size: ${theme.font.sizes.medium};
      max-width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      @media ${theme.media.lteOrEqMedium} {
        font-size: ${theme.font.sizes.small};
        max-width: 40%;
    }
    }
  `}
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
