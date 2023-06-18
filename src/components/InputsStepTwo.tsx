import { css, styled } from 'styled-components';
import Input from './Input';
import Button from './Button';
import { SyntheticEvent, useState } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormDataType } from '../types';
import ErrorsField from './ErrorsField';

type InputsStepTwoProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  setValue: UseFormSetValue<FormDataType>;
};

export default function InputsStepTwo({
  register,
  errors,
  setValue,
}: InputsStepTwoProps) {
  const [advantages, setAdvantages] = useState<string[]>([]);
  const copyAdvantages = [...advantages];

  const addAdvantage = () => {
    copyAdvantages.push('');
    setAdvantages(copyAdvantages);
  };

  const deleteAdvantage = (evt: SyntheticEvent) => {
    copyAdvantages.splice(+evt.currentTarget.id.split('-')[2] - 1, 1);
    setAdvantages(copyAdvantages);
  };

  return (
    <>
      <li>
        <FieldsetInputsAdvantages>
          <LabelAdvantages>Advantages</LabelAdvantages>
          {advantages.map((_, id) => (
            <Advantage key={`${id + 1}`}>
              <Input
                {...register('advantages')}
                width={300}
                name={`field-advatages-${id + 1}`}
                id={`field-advatages-${id + 1}`}
                placeholder="Placeholder"
                type="text"
              />
              <ButtonDelete
                onClick={deleteAdvantage}
                type="button"
                id={`button-remove-${id + 1}`}
              />
            </Advantage>
          ))}
          <ButtonAdd id="button-add" type="button" onClick={addAdvantage} />
        </FieldsetInputsAdvantages>
      </li>
      <li>
        <FieldsetInputsOther>
          <LabelOther>Checkbox group</LabelOther>
          <InputLabel $type="checkbox">
            <CheckboxAndRadio
              {...register('groupCheck')}
              id="field-checkbox-group-option-1"
              type="checkbox"
              value={1}
            />
            <SpanLabel>1</SpanLabel>
          </InputLabel>
          <InputLabel $type="checkbox">
            <CheckboxAndRadio
              {...register('groupCheck')}
              id="field-checkbox-group-option-2"
              type="checkbox"
              value={2}
            />
            <SpanLabel>2</SpanLabel>
          </InputLabel>
          <InputLabel $type="checkbox">
            <CheckboxAndRadio
              {...register('groupCheck')}
              id="field-checkbox-group-option-3"
              type="checkbox"
              value={3}
            />
            <SpanLabel>3</SpanLabel>
          </InputLabel>
          {errors.groupCheck && (
            <ErrorsField>{errors.groupCheck.message}</ErrorsField>
          )}
        </FieldsetInputsOther>
      </li>
      <li>
        <FieldsetInputsOther>
          <LabelOther>Radio group</LabelOther>
          <InputLabel $type="radio">
            <CheckboxAndRadio
              {...register('groupRadio')}
              id="field-radio-group-option-1"
              type="radio"
              value={1}
            />
            <SpanLabel>1</SpanLabel>
          </InputLabel>
          <InputLabel $type="radio">
            <CheckboxAndRadio
              {...register('groupRadio')}
              id="field-radio-group-option-2"
              type="radio"
              value={2}
            />
            <SpanLabel>2</SpanLabel>
          </InputLabel>
          <InputLabel $type="radio">
            <CheckboxAndRadio
              {...register('groupRadio')}
              id="field-radio-group-option-3"
              type="radio"
              value={3}
            />
            <SpanLabel>3</SpanLabel>
          </InputLabel>
          {errors.groupRadio && (
            <ErrorsField>{errors.groupRadio.message}</ErrorsField>
          )}
        </FieldsetInputsOther>
      </li>
    </>
  );
}

const FieldsetInputsAdvantages = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: none;
  margin: 0;
  padding: 0;
`;

const FieldsetInputsOther = styled(FieldsetInputsAdvantages)`
  gap: 0;
`;

const LabelAdvantages = styled.legend`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

const LabelOther = styled(LabelAdvantages)`
  margin-bottom: 0;
`;

const ButtonAdd = styled(Button)`
  width: 44px;
  height: 44px;
  background: url('./img/add.svg') no-repeat center center;
  align-self: flex-start;

  @media screen and (max-width: 540px) {
    width: 30px;
    height: 30px;
  }
`;

const Advantage = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 540px) {
    gap: 8px;
  }
`;

const ButtonDelete = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15.2px;
  background: url(./img/trash.svg) no-repeat center center;
  border: none;
`;

const SpanLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;
`;

const CheckboxAndRadio = styled.input`
  opacity: 0;
  width: 16px;
  height: 16px;
`;

const InputLabel = styled.label<{ $type: string }>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border: 1.5px solid rgba(0, 0, 0, 0.24);
    border-radius: 4px;
  }

  ${CheckboxAndRadio} + ${SpanLabel}::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 3px;
    left: 0;
    transform: translateX(1.5px);
    background: url(./img/check.svg) no-repeat center center #5558fa;
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    transition: opacity 0.3s ease-in-out;
  }

  ${CheckboxAndRadio}:checked + ${SpanLabel}::after {
    opacity: 1;
  }

  ${({ $type }) =>
    $type === 'radio' &&
    css`
      &::before {
        border-radius: 50%;
      }

      ${CheckboxAndRadio} + ${SpanLabel}::after {
        top: 5px;
        left: 2px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #5558fa;
      }
    `}
`;
