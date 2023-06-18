import { createRef, forwardRef, Ref, RefCallback } from 'react';
import IMask from 'imask';
import { IMaskInput } from 'react-imask';
import { styled } from 'styled-components';

type InputMaskProps = {
  onChange?: (event: { target: { name?: string; value: string } }) => void;
  name?: string;
  mask: string;
  $width: number;
  disabled?: boolean;
  id: string;
  placeholder: string;
  type: string;
  ref: Ref<IMask.MaskElement>;
};

export const InputMask = forwardRef<IMask.MaskElement, InputMaskProps>(
  (props, inputRef) => {
    const { onChange, mask, name, ...other } = props;
    const ref = createRef();

    return (
      <InputMaskStyled
        {...other}
        inputRef={inputRef as RefCallback<IMask.MaskElement>}
        ref={ref}
        mask={mask}
        onChange={onChange}
        name={name}
      />
    );
  }
);

InputMask.displayName = 'InputMask';

const InputMaskStyled = styled(IMaskInput)<{ $width: number }>`
  box-sizing: border-box;
  padding: 12px;
  width: ${({ $width }) => `${$width}px`};
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  display: flex;
  align-items: center;
  color: #333333;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: rgba(0, 0, 0, 0.48);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: 2px solid #5558fa;
    outline-offset: 2px;
  }

  @media screen and (max-width: 540px) {
    width: 200px;
    padding: 6px;
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
    }
  }
`;
