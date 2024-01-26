import styled, { css } from 'styled-components';
import { Wrapper as TextInput } from '../TextInput/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80vw;
    height: 90vh;
    margin: 0 auto;
    border: 1px solid ${theme.colors.primaryLight};
    border-radius: 10px;
    padding: 10px;
    ul {
      list-style: none;
      padding: ${theme.spacings.medium};
    }
    @media ${theme.media.lteOrEqMedium} {
      width: 95vw;
      height: 90vh;
    }
  `}
`;

export const AddTaskDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    align-items: center;
    ${TextInput} {
      width: 80%;
    }
  `}
`;

export const HeadingDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    ${TextInput} {
      width: 80%;
    }
  `}
`;
