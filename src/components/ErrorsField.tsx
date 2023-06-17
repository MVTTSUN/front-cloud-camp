import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export default function ErrorsField({ children }: PropsWithChildren) {
  return <ErrorsStyled>{children}</ErrorsStyled>;
}

const ErrorsStyled = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: red;

  @media screen and (max-width: 540px) {
    font-size: 10px;
  }
`;
