import { MouseEventHandler, PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';

type ButtonProps = PropsWithChildren<{
  isForwardType?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id: string;
}>;

export default function Button({
  children,
  isForwardType,
  onClick,
  type,
  className,
  id,
}: ButtonProps) {
  return (
    <ButtonStyled
      id={id}
      className={className}
      type={type}
      onClick={onClick}
      $forward={isForwardType}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<{ $forward?: boolean }>`
  cursor: pointer;
  padding: 12px 16px;
  background: none;
  border-radius: 4px;
  border: none;
  outline: 1.5px solid #5558fa;
  outline-offset: -1.5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #5558fa;

  ${({ $forward }) =>
    $forward &&
    css`
      background-color: #5558fa;
      outline: none;
      color: #fff;
    `};

  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding: 6px 8px;
  }
`;
