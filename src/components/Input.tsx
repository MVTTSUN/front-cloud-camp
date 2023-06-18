import { Ref, forwardRef } from 'react';
// import { IMaskMixin } from 'react-imask';
import { styled } from 'styled-components';
import Tip from './Tip';
import { ChangeHandler } from 'react-hook-form';
import { InputMask } from './InputMask';

type InputProps = {
  hasTip?: boolean;
  width: number;
  labelText?: string;
  id: string;
  placeholder: string;
  isDisabled?: boolean;
  type: string;
  tipText?: string;
  name?: string;
  onChange?: ChangeHandler;
};

const Input = forwardRef(
  (
    {
      hasTip,
      width,
      labelText,
      id,
      placeholder,
      isDisabled,
      type,
      tipText,
      name,
      onChange,
    }: InputProps,
    ref: Ref<IMask.MaskElement & HTMLInputElement>
  ) => (
    <Container>
      {labelText && (
        <Label $disabled={isDisabled} htmlFor={id}>
          {labelText}
        </Label>
      )}
      {type === 'tel' ? (
        <InputMask
          ref={ref}
          name={name}
          onChange={onChange}
          mask="+{7} 000 000-00-00"
          $width={width}
          disabled={isDisabled}
          id={id}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <InputStyled
          name={name}
          onChange={onChange}
          ref={ref}
          $width={width}
          disabled={isDisabled}
          id={id}
          placeholder={placeholder}
          type={type}
        />
      )}
      {hasTip && <Tip>{tipText}</Tip>}
    </Container>
  )
);

Input.displayName = 'Input';
export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label<{ $disabled?: boolean }>`
  align-self: flex-start;
  cursor: ${({ $disabled }) => ($disabled ? 'auto' : 'pointer')};
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const InputStyled = styled.input<{ $width: number }>`
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

// type MaskedStyledInputProps = {
//   mask: string;
//   $width: number;
//   disabled: boolean;
//   id: string;
//   placeholder: string;
//   type: string;
//   value: string;
//   inputRef: MutableRefObject<HTMLInputElement>;
// };

// const MaskedStyledInput = IMaskMixin(
//   ({ inputRef, ...props }: MaskedStyledInputProps) => (
//     <InputStyled ref={inputRef} {...props} />
//   )
// );
