import { styled } from 'styled-components';
import Tip from './Tip';
import { ChangeEvent, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDataType } from '../types';
import ErrorsField from './ErrorsField';

type InputsStepThreeProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
};

export default function InputsStepThree({
  register,
  errors,
}: InputsStepThreeProps) {
  const [valueTextarea, setValueTextarea] = useState('');

  const textareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setValueTextarea(evt.target.value);
  };

  return (
    <Container>
      <Label htmlFor="field-about">About</Label>
      <Textarea
        {...register('about', { required: 'Обязательное поле' })}
        onChange={textareaChangeHandler}
        value={valueTextarea}
        placeholder="Placeholder"
        id="field-about"
      />
      <InfoTextarea>
        <Tip>Максимальная длина 200 символов</Tip>
        <CounterSymbol>
          Символов без пробелов: {valueTextarea.split(' ').join('').length}
          <br /> Всего символов: {valueTextarea.length}
        </CounterSymbol>
      </InfoTextarea>
      {errors.about && <ErrorsField>{errors.about.message}</ErrorsField>}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  cursor: pointer;
  align-self: flex-start;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #333333;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 12px;
  height: 84px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: rgba(0, 0, 0, 0.48);
  }

  &:focus {
    outline: 2px solid #5558fa;
    outline-offset: 2px;
  }

  @media screen and (max-width: 540px) {
    &::placeholder {
      font-size: 12px;
    }
  }
`;

const InfoTextarea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterSymbol = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: rgba(0, 0, 0, 0.48);

  @media screen and (max-width: 540px) {
    font-size: 10px;
  }
`;
