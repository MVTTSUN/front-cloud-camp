import { Ref, forwardRef } from 'react';
import { styled } from 'styled-components';
import Tip from './Tip';
import { ChangeHandler, UseFormSetValue } from 'react-hook-form';
import { FormDataType } from '../types';

type InputSelectProps = {
  options: string[];
  name?: string;
  onChange?: ChangeHandler;
  setValue: UseFormSetValue<FormDataType>;
};

export const InputSelect = forwardRef(
  (
    { options, name, onChange, setValue }: InputSelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const changeOption = (data: string) => {
      setValue('sex', data);
    };

    return (
      <div>
        <Label htmlFor="field-sex">Sex</Label>
        <Select
          name={name}
          onChange={onChange}
          ref={ref}
          id="field-sex"
          disabled
          placeholder="Не выбрано"
        />
        <TooltipOptions>
          {options.map((data, id) => (
            <Option
              onClick={() => changeOption(data)}
              id={`field-sex-option-${data}`}
              key={`${id + 1}`}
            >
              {data}
            </Option>
          ))}
        </TooltipOptions>
        <Tip>Выберите одно из значений</Tip>
      </div>
    );
  }
);

InputSelect.displayName = 'InputSelect';

const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 8px;
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

const TooltipOptions = styled.div`
  position: absolute;
  transform: translateY(-8px);
  width: 300px;
  display: none;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  &:hover {
    display: block;
  }

  @media screen and (max-width: 540px) {
    width: 200px;
  }
`;

const Select = styled.input`
  margin-bottom: 8px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 12px;
  width: 300px;
  background: url(./img/selectIcon.svg) no-repeat calc(100% - 16px) center;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  display: flex;
  align-items: center;
  color: #333;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: rgba(0, 0, 0, 0.48);
  }

  &:hover + ${TooltipOptions} {
    display: block;
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

const Option = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 12px 12px 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  }

  @media screen and (max-width: 540px) {
    padding: 6px;
    font-size: 12px;
  }
`;
