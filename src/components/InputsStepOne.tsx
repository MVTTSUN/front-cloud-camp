import Input from './Input';
import InputSelect from '../components/InputSelect';
import { sex } from '../mocks';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import ErrorsField from './ErrorsField';
import { FormDataType } from '../types';

type InputsStepOneProps = {
  register: UseFormRegister<FormDataType>;
  errors: FieldErrors<FormDataType>;
  setValue: UseFormSetValue<FormDataType>;
  trigger: UseFormTrigger<FormDataType>;
  watch: UseFormWatch<FormDataType>;
};

export default function InputsStepOne({
  register,
  errors,
  setValue,
  trigger,
  watch,
}: InputsStepOneProps) {
  return (
    <>
      <li>
        <Input
          {...register('nickname', { required: 'dfgfg' })}
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
          {...register('name', { required: 'dfgfg' })}
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
          {...register('surname', { required: 'dfgfg' })}
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
        <InputSelect
          trigger={trigger}
          {...register('sex', { required: 'dfgfg' })}
          setValue={setValue}
          options={sex}
          watch={watch}
        />
        {errors.sex && <ErrorsField>{errors.sex.message}</ErrorsField>}
      </li>
    </>
  );
}
