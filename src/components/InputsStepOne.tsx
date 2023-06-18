import Input from './Input';
import InputSelect from '../components/InputSelect';
import { sex } from '../mocks';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import ErrorsField from './ErrorsField';
import { FormDataType } from '../types';

type InputsStepOneProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  setValue: UseFormSetValue<FormDataType>;
};

export default function InputsStepOne({
  register,
  errors,
  setValue,
}: InputsStepOneProps) {
  return (
    <>
      <li>
        <Input
          {...register('nickname')}
          hasTip
          width={300}
          labelText="Nickname"
          id="field-nickname"
          placeholder="Placeholder"
          type="text"
          tipText="Максимальная длина 30 символов, могут быть только буквы и цифры"
        />
        {errors.nickname && (
          <ErrorsField>{errors.nickname.message}</ErrorsField>
        )}
      </li>
      <li>
        <Input
          {...register('name')}
          hasTip
          width={300}
          labelText="Name"
          id="field-name"
          placeholder="Placeholder"
          type="text"
          tipText="Максимальная длина 50 символов"
        />
        {errors.name && <ErrorsField>{errors.name.message}</ErrorsField>}
      </li>
      <li>
        <Input
          {...register('surname')}
          hasTip
          width={300}
          labelText="Sername"
          id="field-sername"
          placeholder="Placeholder"
          type="text"
          tipText="Максимальная длина 50 символов"
        />
        {errors.surname && <ErrorsField>{errors.surname.message}</ErrorsField>}
      </li>
      <li>
        <InputSelect {...register('sex')} setValue={setValue} options={sex} />
        {errors.sex && <ErrorsField>{errors.sex.message}</ErrorsField>}
      </li>
    </>
  );
}
