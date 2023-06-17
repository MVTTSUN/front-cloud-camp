import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export default function Tip({ children }: PropsWithChildren) {
  return (
    <TipStyled>
      Tip
      <ToolTip>{children}</ToolTip>
    </TipStyled>
  );
}

const ToolTip = styled.span`
  display: none;
  box-sizing: border-box;
  position: absolute;
  background-color: #333;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  padding: 20px 18px 18px 22px;
  border-radius: 10px;
  max-width: 300px;

  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding: 5px;
    max-width: 200px;
  }
`;

const TipStyled = styled.p`
  align-self: flex-start;
  cursor: pointer;
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: rgba(0, 0, 0, 0.48);

  &:hover ${ToolTip} {
    display: block;
  }

  @media screen and (max-width: 540px) {
    font-size: 10px;
  }
`;
